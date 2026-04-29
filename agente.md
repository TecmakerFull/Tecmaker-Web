En Mapa_sistema.md se detallan los componentes del sistema y su interacción.

# Inicialización del Sistema (Automático)

El sistema se ha migrado a una arquitectura moderna basada en **FastAPI (Backend)** y **React/Vite (Frontend Unificado)**. El panel de Streamlit ha sido deprecado para optimizar recursos.

## Opción Recomendada (Local)
Simplemente ejecuta en la terminal raíz:

```bash
./start.sh
```

Esto iniciará:
1.  **Backend API**: Puerto 8000 (Local) / Dinámico (Nube via $PORT)
2.  **Frontend (Operador + Config)**: Puerto 5173
3.  **Simulador IoT**: Puerto 8080

Para detener todo, presiona `Ctrl+C`.

---
Usamos su

## Opción Manual (Legacy / Debugging)

Si necesitas ejecutar los servicios por separado para depuración:

### Terminal 1: Backend
source .venv/bin/activate
uvicorn api:app --reload --host 0.0.0.0 --port 8000

### Terminal 2: Panel Operador
source .venv/bin/activate
streamlit run app_web.py

### Terminal 3: Panel Configuración
cd frontend
npm run dev

# Rutina diaria de respaldo y versionado
./scripts/backup.sh 
git add .
git commit -m "Avances del dia"
git push

git branch (La que tenga un asterisco * a su izquierda y esté en color es la rama actual))
git status (La primera línea te dirá: On branch ...)
git checkout production (Cambiar a la rama de producción)


# Arquitectura de Despliegue (v4.0 Pro)

El sistema utiliza una arquitectura híbrida multi-nube para maximizar rendimiento y estabilidad:

### 🚀 Matriz de Entornos y URLs
| Entorno | URL Frontend (Cloudflare) | URL Backend (Render) | Propósito |
| :--- | :--- | :--- | :--- |
| **Producción** | [tecmaker.app](https://tecmaker.app) | `api.tecmaker.app` | Cliente Final / Estable |
| **Staging** | [test.tecmaker.app](https://test.tecmaker.app) | `tecmaker-staging.onrender.com` | Pruebas y Validación |

### 🏗️ Estrategia de Ramas (Mantenimiento Profesional)
*   **`develop`**: Rama activa de desarrollo. Se despliega automáticamente en **Staging**.
*   **`main`**: Rama de integración. Aquí se consolidan las features probadas antes de pasar a producción.
*   **`production`**: Rama crítica. **Espejo exacto de lo que ve el cliente**. Todo cambio aquí debe ser un merge verificado desde `develop` o `main`.

### 🛠️ Configuración de Servicios Cloud

#### ☁️ Frontend (Cloudflare Pages)
*   **Repositorio:** Conectado a GitHub.
*   **Build Settings:**
    *   **Root Directory:** `/frontend`
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
*   **Ruteo SPA:** Se configuró un archivo `_redirects` o regla de transformación para que todas las rutas apunten a `index.html`.
*   **Variables de Entorno:** `VITE_API_URL` configurada con el subdominio `api` correspondiente.

#### ⚡ Backend (Render.com)
*   **Tipo:** Web Service (Docker).
*   **Detección de Puerto:** El `Dockerfile` utiliza `CMD ["sh", "-c", "uvicorn api:app --host 0.0.0.0 --port ${PORT:-8000}"]`. Esto permite que Render asigne su puerto dinámico (ej: 10000) sin errores.
*   **CORS:** `api.py` autoriza explícitamente a `tecmaker.app`, `www.tecmaker.app` y `test.tecmaker.app`.

#### 🌐 Gestión de Dominios y DNS
*   **Apex Domain (`tecmaker.app`):** Gestionado por Cloudflare Pages (**Nube Naranja** activa para protección y caché).
*   **API Subdomain (`api.tecmaker.app`):** 
    *   Configurado en Cloudflare como CNAME a `tecmaker.onrender.com`.
    *   **MANDATORIO:** Nube en **GRIS (DNS Only)** para evitar conflictos de SSL con Render y errores de CORS.

### 💾 Protocolo de Base de Datos (MANDATORIO)
1.  **Staging First:** Todo SQL se aplica primero en el proyecto Supabase de Staging.
2.  **Validación de Datos:** Se verifica en `test.tecmaker.app`.
3.  **Espejado a Prod:** Se aplica el **MISMO** script SQL en el proyecto de Producción.
4.  **Soft Deletes:** Nunca usar `DELETE`. Usar `is_deleted = TRUE`.

---

# Manual Técnico y Operativo - Tecmaker 4.0

Este documento unifica los criterios, estándares de desarrollo y lógica de cálculo OEE del sistema Tecmaker 4.0.
Su contenido es **ley** para cualquier desarrollo futuro.

---

## 1. Estándares Generales de Desarrollo

### 1.1. Filosofía
*   **Idioma:** Comunicaciones, comentarios y lógica siempre en **Español Castellano**.
    PRIORIZAR FLUIDEZ EN TODO MOMENTO, hacerme un comentario si alguna solicitud pone en riesgo la fluidez.
    Pensar todo para que pueda ser visto en pantalla de celular, sobre todo los menús de operador.
*   **Modularización Estricta:**
    *   Prohibido crear archivos monolíticos.
    *   Nuevos menús/ventanas complejos deben ir a archivos separados en `views/`, `components/` o `services/`.
*   **Documentación (Comentarios):**
    *   **OBLIGATORIO** incluir docstrings explicativos antes de cada función o bloque complejo.
    *   Detallar la **INTENCIÓN**: Qué se quiere lograr, qué se evita y por qué.
*   **Interfaz de Usuario (UI):**
    *   Usar siempre iconos SVG del sistema (`icons.py`), evitar emojis.
    *   **Semántica 'Disponible'**: Usar `disponible` (no `activo`) para indicar que un recurso (Máquina, Producto, MP) está operativo.

### 1.4. Interfaz de Usuario (UI) en ABMs y Tablas de Configuración
*   **Encabezados Estandarizados:** 
    *   Contenedor superior (`flex flex-col md:flex-row justify-between items-start md:items-center gap-4`).
    *   Izquierda: Título (ícono + nombre, 2xl bold) y subtítulo descriptivo en text-slate-400.
    *   Derecha: Barra de Búsqueda (`w-full md:w-64 lg:w-80` con ícono), botón de Refresco (`RefreshCw`) y botón Primario (`+ Nuevo`).
*   **Tablas Interactivas y Limpias:**
    *   **Prohibida** la tradicional columna dedicada a "Acciones" (ocupa espacio innecesario).
    *   Los registros completos (filas) deben ser clickeables (`cursor-pointer hover:bg-slate-700/30 group`). Al hacer clic, despliegan el modal de detalle/edición.
    *   El ordenamiento por columnas debe implementarse usando el componente encapsulado `SortableHeader` (íconos interactivos ChevronUp/Down).
*   **Modales Autosuficientes:**
    *   Las opciones destructivas o críticas (Eliminar, Activar/Desactivar) deben incluirse **dentro de la barra inferior (footer) del modal de edición**, en el extremo izquierdo.

### 1.2. Mantenimiento de Base de Datos
*   **Schema.sql:** Toda modificación en BD (tablas, columnas) debe reflejarase en `schema.sql` inmediatamente.
*   **Soft Delete:**
    *   NUNCA usar `DELETE` físico en entidades principales.
    *   Usar flag `is_deleted = TRUE` y filtrar siempre `WHERE is_deleted = FALSE`.
*   **Auditoría:** Tablas transaccionales deben tener: `created_by/at`, `updated_by/at`, `deleted_by/at`.

### 1.3. Manejo de Zonas Horarias
*   **Regla de Oro:** NO realizar aritmética manual de offsets (ej. `INTERVAL -3 hours`) en consultas SQL.
*   **Confianza:** Confiar en la serialización automática de `TIMESTAMP WITH TIME ZONE` de las librerías (psycopg2, streamlit).
*   **Configuración:** Usar variable `tz_offset` de la configuración de empresa (default: -3 AR) solo cuando sea estrictamente necesario para visualizar, no para lógica de almacenamiento.

---

## 2. Definición de Estados de Máquina

Existen únicamente **3 ESTADOS OFICIALES** para una máquina.

### 2.1. Matriz de Estados (Comportamiento UI)

| Estado | Turno Asignado? | Parada Programada? | Color Botón | Color Barra Estado | Impacta Disponibilidad? | Notas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PRODUCCION** | SI | SI | Verde | Verde | NO | - |
| **PRODUCCION** | SI | NO | Verde | Verde | NO | - |
| **PRODUCCION** | NO | SI | Verde | Verde | NO | Sin OEE |
| **PRODUCCION** | NO | NO | Verde | Verde | NO | Sin OEE |
| **PARADA** | SI | SI | Gris (Prog.) | Gris | **NO (Programada)** | Evento calendario |
| **PARADA** | SI | NO | Rojo | Rojo + Cronómetro | **SI (si ≥5min)** | Ver 2.2 |
| **PARADA** | NO | SI | Gris | Gris | NO | Sin OEE |
| **PARADA** | NO | NO | Gris | Gris | NO | Sin OEE |
| **SETUP** | SI | SI | Amarillo | Amarillo | NO | - |
| **SETUP** | SI | NO | Amarillo | Amarillo | Depende (Ver 4.2) | Solo excedente |
| **SETUP** | NO | - | Amarillo | Amarillo | NO | Sin OEE |

### 2.2. **Cronómetro de Microparada (X minutos)** X=variavle por empresa


**IMPORTANTE:** Este cronómetro aplica solo para **estado PARADA**. El estado SETUP tiene su propia lógica (ver 4.2).

**Al detectar señal STOP** (manual o IOT) en estado **PARADA**:
1. **NO se abre tarjeta** 
2. **Se inicia cronómetro visual** de X minutos: (X = tiempo de microparada asignad a cada empresa)
   - Barra de progreso / Cuenta regresiva
   - Color: Amarillo (advertencia)
   - Muestra tiempo transcurrido: "0:00 / X:00"

**Durante los primeros X minutos** (microparada en curso):
- El cronómetro sigue corriendo
- Si se declara parada, se abre tarjeta roja oscura (apagada) y se detiene el cronómetro, impacta disponibilidad. (ver 2.2.3)
- El tiempo va acumulándose en el "bolsón de rendimiento"
- Mensaje: "Microparada en curso"

**Si llega a X:00 minutos (Escalamiento):**
- Se **abre tarjeta ROJA** (parada no justificada) en `productoeventos_produccion`.
- El cronómetro se detiene y desaparece.
- **AHORA SÍ se puede declarar/justificar**.
- Impacta Disponibilidad.
- **Auto-Escalado Robusto:** El servidor verifica éste vencimiento en cada petición de estado. Si el tiempo se cumplió, el servidor escala la microparada a tarjeta roja automáticamente, incluso si el proceso de fondo (`run_escalator`) o el Dashboard estuvieran cerrados. Esto garantiza que al abrir el sistema, las paradas ya estén convertidas si vencieron.

**Si vuelve a producir ANTES de X:00 minutos**:
- El cronómetro se **cancela** y desaparece
- Tiempo acumulado (< X min) → **bolsón de rendimiento** automáticamente
- **NO se crea ninguna tarjeta**
- No impacta Disponibilidad

2.2.3. **Declaración voluntaria (Bypass del cronómetro):**
- El operador puede forzar la creación de una tarjeta ANTES del tiempo límite de microparada si lo considera necesario
- Lo puede hacer aprentando el boton de declarar parada debajo del boton amarillo, que tendria que estar activo
- El modal que abre ese boton, da la posibilidad de declarar razones "programadas" o "no programadas", no "pérdida de rendimiento".
- Al hacerlo: El cronómetro se detiene, se crea tarjeta roja oscura (apagada) justificada, SÍ afecta Disponibilidad
- Al hacerlo: El boton de estado cambia a Rojo, con la justificacion de realizada por el operador.

---

## 5. Seguridad y Conectividad IoT (Actualizado 2026-03-06)

### 5.1. Seguridad y Conectividad IoT (Actualizado 2026-03-07)

*   **Aislamiento Multitenencia**: Basado en API Keys por empresa con validación estricta en DB (`auth_api_keys`).
*   **Production Lock (Bloqueo de Producción)**: Para evitar "piezas fantasmas" por ruido eléctrico, el firmware solo incrementa el contador de piezas si el estado de la máquina ha sido **confirmado como PRODUCCION**.
*   **Filtro de Estado Robusto**: El cambio de estado (Pin 5) ahora requiere una confirmación de **1.5 a 2 segundos** continuos para considerarse válido, filtrando picos de tensión.
*   **Feedback Visual Avanzado (Doble Flash)**: 
    *   Cuando el sensor detecta una pieza física **o** cuando el servidor confirma la recepción de datos, el LED realiza un **doble parpadeo rápido** (estilo estroboscopio).
    *   Esto garantiza visibilidad total del funcionamiento del hardware sin importar la luz ambiental.
*   **Simulación Física**: El simulador interno (Pin 13) opera con un intervalo de **52 segundos** y requiere un puente físico al Pin 4 para validación total de la cadena de hardware.

---

## 24. Estándar Visual Premium (PCP & Configuración)

Se ha establecido un lenguaje visual unificado para las pantallas de gestión técnica, orientado a la legibilidad y la estética industrial moderna.

### 24.1. Tipografía y Jerarquía
- **Fuente Principal:** `Outfit` (definida en el contenedor raíz).
- **Encabezados (Tablas y Sidebars):**
    - Estilo: `text-xs`, `font-medium`, `text-slate-400`, `uppercase`, `tracking-wider`.
    - Objetivo: Mantener una estructura clara sin competir visualmente con los datos.
- **Datos en Tablas (Registros):**
    - Estilo: `font-medium`, `text-slate-200` (blanco suavizado), `text-sm`.
    - Regla: **Evitar 'font-bold'** en el cuerpo de las tablas y en los botones de acción para mantener una estética más limpia y profesional.

### 24.2. Superficies y Contenedores
- **Paneles Principales:** Fondo `bg-slate-800`, borde `border-slate-700`, esquinas `rounded-2xl`, sombra `shadow-2xl`.
- **Sub-encabezados Internos:** Fondo `bg-slate-900/50` con borde inferior `border-b border-slate-700`. Se usa para títulos de tablas o áreas de filtros.
- **Interacción en Tablas:** Filas con `hover:bg-slate-700/30` y transición suave.

### 24.3. Navegación y Sidebars
- **Fondo de Sidebar:** `bg-slate-800` (mismo nivel que el panel principal para integración total).
- **Item Seleccionado:** Fondo `bg-blue-600/10`, texto `text-blue-400`, borde `border-blue-500/20`, sombra interna `shadow-inner`.
- **Indicador Activo:** Icono `CheckCircle2` con animación `animate-in zoom-in`.

### 24.4. Componentes de Información
- **Badges de Conteo (Cápsulas):**
  - Estilo estándar: `bg-slate-900`, `border border-slate-700`, `rounded-xl`, `text-slate-400`.
  - Estilo activo: `bg-blue-600`, `text-white`, `border-blue-400`, `shadow-lg`.
### 24.5. Estándar de Modales (Formularios)

Los modales de creación y edición (como "Nueva Asignación" o "Nueva Materia Prima") siguen un esquema estrictamente funcional y sobrio.

- **Contenedor:** `bg-slate-800`, `rounded-xl`, `border border-slate-700`, sombra `shadow-2xl`.
- **Encabezado (Header):**
  - Título: `text-xl`, `font-bold`, `text-white`.
  - Icono a la izquierda en color `text-blue-500`.
  - Botón cerrar (X): `text-slate-400`, `hover:text-white`.
- **Campos y Etiquetas (Inputs & Labels):**
  - **Labels:** `text-sm`, `font-medium`, `text-slate-400`, `mb-1`.
  - **Inputs/Selects:** 
    - Fondo: `bg-slate-900`.
    - Borde: `border-slate-700`.
    - Redondeado: `rounded` (4px).
    - Texto: `text-sm`, `text-white`.
    - Focus: `focus:border-blue-500`, `focus:outline-none`.
  - **Inputs Solo-Lectura:** Fondo `bg-slate-900`, texto `text-slate-400 font-bold`.
  - **Menús, Opciones y Textos Internos:** Usar **SIEMPRE** grosores regulares (`font-normal` o `font-medium`). Promover un diseño fino y elegante. Queda **PROHIBIDO** el uso de negritas pesadas (`font-bold`, `font-semibold`, `font-black`, `font-extrabold`) en los modales para evitar que el texto se vea demasiado "gordo" o tosco.
- **Pie de Modal (Footer):**
  - Fondo: `bg-slate-800/50`.
  - División: `border-t border-slate-700`.
  - Alineación: Botones a la derecha (`justify-end gap-3`).
- **Botones de Acción:**
  - **Cancelar:** `px-4`, `py-2`, `text-slate-300`, `hover:text-white`, `hover:bg-slate-700`, `rounded`.
  - **Guardar:** `px-4`, `py-2`, `bg-blue-600`, `hover:bg-blue-700`, `text-white`, `rounded`, `font-medium`, `text-sm`. (Sin negritas).

### 5.2. Funcionamiento Offline y Memoria
El firmware está diseñado para ser resiliente a fallas de internet:
*   **Contador Infinito**: Utiliza un registro de 32 bits que permite contar hasta **2.147.483.647 piezas** sin conexión.
*   **Feedback Visual Offline**: Si el nodo no tiene WiFi (LED azul apagado), el LED emitirá un **destello corto** cada vez que cuente una pieza para dar tranquilidad al operador.
*   **Sincronización Inteligente**: Al recuperar la conexión, el nodo envía el total acumulado en lotes eficientes para no saturar el servidor y asegurar que ninguna pieza se pierda.

### 5.3. Monitoreo de Conexión en Tiempo Real (Heartbeat)
El panel de control ("Machine Panel") muestra el estado real de comunicación del dispositivo:
*   **ONLINE (Cian)**: El servidor ha recibido actividad (pulso, inicio, etc.) en los últimos **2 minutos**.
*   **OFFLINE (Rojo)**: Han pasado más de 2 minutos sin señales. Se muestra el texto "OFFLINE" para alertar al operador de un posible fallo en el hardware o red.
*   **Latencia**: El campo `last_iot_activity` en la tabla `equipos` actúa como el sello de tiempo del último "latido" del equipo.

### 5.3. Configuración del Nodo IoT
Cada nodo (ESP32) posee un **Portal de Configuración** accesible vía WiFi (`TecMaker-Node-Config`) para cargar:
1.  **WiFi SSID/Pass**: Credenciales de la planta.
2.  **Machine ID**: El número de máquina asignado en el panel de configuración.
3.  **Empresa API Key**: La llave única de seguridad de la empresa cliente.

---

## 3. Lógica de Cálculo OEE (La Biblia)

### 3.1. Regla de Agregación (CRÍTICA)
*   **Prohibido Promediar Porcentajes:** NUNCA hacer promedio de OEEs diarios para sacar el mensual.
*   **Procedimiento Global:**
    1.  Sumar (`SUM`) todos los tiempos programados del período.
    2.  Sumar (`SUM`) todas las producciones del período.
    3.  Sumar (`SUM`) todos los rechazos del período.
    4.  RECIÉN AHI calcular los ratios (D, R, C).

### 3.2. **SIN TURNO ASIGNADO = SIN OEE (REGLA ABSOLUTA)**
**Si una máquina NO tiene turno asignado para un período:**
- **Disponibilidad (D)**: `NULL` / No calculado
- **Rendimiento (R)**: `NULL` / No calculado
- **Calidad (C)**: `NULL` / No calculado
- **OEE**: `NULL` / No calculado

**Producción sin turno:**
- **SI** se registra la cantidad de piezas producidas (OK y Scrap) para conteo
- **NO** se incluye en NINGÚN promedio ni agregación de OEE
- **NO** se valida contra metas
- Propósito: Solo registro de existencia/actividad

**Razón**: Sin tiempo programado no hay base para calcular eficiencia. El OEE mide el aprovechamiento del tiempo **programado para producir**.

### 3.3. Fórmula Maestra
$$OEE = Disponibilidad (D) \times Rendimiento (R) \times Calidad (C)$$

### 3.4. Metas Históricas
*   Las metas de OEE varían en el tiempo.
*   Al reportar, buscar siempre la meta vigente en `metas_historicas_maquina` para el momento del dato (`fecha_desde <= fecha_dato`).

---

## 4. Disponibilidad (Availability)

$$D = \frac{\text{Tiempo Operativo}}{\text{Tiempo Disponible}}$$

Donde:
- **Tiempo Programado** = Duración total del turno
- **Tiempo Disponible** = Tiempo Programado - Paradas Programadas
- **Tiempo Operativo** = Tiempo Disponible - Paradas Imprevistas (≥ x min)

### 4.1. Clasificación de Paradas

#### 4.1.1. Paradas Programadas (Eventos del Calendario)
- **NO impactan Disponibilidad** → Se restan del Tiempo Programado
- Ejemplos: Comida, mantenimiento preventivo, reuniones, cambios de turno
- Identificación: Marcadas con `[AUTO]` en observaciones o vinculadas a eventos del calendario PCP
- PCP puede cargar páradas programadas en el pasado, por lo que se debe tener en cuenta al momento de calcular el OEE.

#### 4.1.2. Paradas Imprevistas ≥ x minutos
- **SÍ impactan Disponibilidad** → Reducen el Tiempo Operativo
- **TODAS impactan igual**, estén justificadas o no:
  - **Justificadas**: Conocemos el motivo (falta de material, avería, etc.) → Trazabilidad
  - **No justificadas**: No sabemos el motivo → Requiere investigación
  - Ambas **RESTAN Disponibilidad por igual**
- **Umbral**: El umbral de x minutos es configurable por empresa

#### 4.1.3. Paradas Imprevistas < x minutos
- **NO impactan Disponibilidad** → Van al "bolsón de pérdida de rendimiento"
- Se acumulan como pérdida de performance, no de disponibilidad
- Ver sección 5.1 para detalles

#### 4.1.4. Fuera de Turno
- **NO hay cálculo de OEE** → Ningún indicador se calcula
- Si la máquina produce fuera de turno → Solo se registra cantidad de piezas para inventario

### 4.2. Setup (Cambio de Formato)
*   El Setup es un estado especial.
*   Se define un **Tiempo Tolerable** por máquina.
*   **Cálculo:** `Tiempo Perdido = MAX(0, Duración Setup Real - Tiempo Tolerable Setup)`
    *   Si el setup dura **menos** del tolerable → Disponibilidad perdida = 0
    *   Si **excede** el tolerable → Solo el **excedente** resta Disponibilidad
    *   Ejemplo: Tolerable = 30 min, Real = 40 min → Impacto = 10 min

### 4.3. Fraccionamiento Automático
En el caso de tener una parada en curso, el sistema debe fraccionar las paradas automáticamente para asignar correctamente la responsabilidad:
1.  **Inicio Evento Calendario:** Cierra parada actual → Abre nueva parada [AUTO] (No impacta).
2.  **Fin Evento Calendario:** Cierra parada [AUTO] → Abre nueva parada Sin Justificar (Impacta).
3.  **Cambio de Turno:** Corta la parada en curso y abre nueva.

---
## 5. Rendimiento (Performance)

$$R = \frac{\text{Total Producción Real}}{\text{Tiempo Operativo} \times \text{Velocidad Teórica}}$$

*   *Tiempo Operativo = Tiempo Programado - Tiempo Paradas (Que restaron Disponibilidad)*

### 5.1. Tratamiento de Pérdidas de Velocidad (Micro-Paradas)
*   **Umbral de Microparada:** Paradas **< x minutos** (configurable por empresa).
*   **Cronómetro Visual:
    - Al detectar STOP → Se inicia cronómetro visual de x minutos (ver sección 2.2)
    - El tiempo acumulado va al "bolsón de rendimiento"
    - Si llega a x:00 → Se abre tarjeta ROJA (declarable)
    - Si se reanuda antes → El cronómetro se cancela, NO se crea tarjeta
*       *   Se crea un "Bolsón de Pérdidas" que acumula los minutos perdidos por:
        1.  **Micro-paradas**: Paradas < x min (cronómetros cancelados antes de x:00)
        2.  **Ciclos Lentos**: Acumulación de tiempo extra por ciclo
            - Ejemplo: Ciclo estándar = 10s, Ciclo real = 12s → +2s por pieza
            - Si se producen 100 piezas → +200s = 3.33 minutos al bolsón
        3.  **Modo IOT**: Se mide directamente el tiempo de ciclo real vs. estándar
        4.  **Modo Manual**: Se calcula indirectamente por producción vs. capacidad teórica
            - Piezas producidas en tiempo disponible < capacidad teórica
            - La diferencia en tiempo es pérdida de rendimiento
    *   **Acumulación por Bloque Horario:**
        - Cada hora de turno asignado acumula la suma de todas las microparadas que ocurrieron/finalizaron en ese bloque de 60 minutos.
        - Esta suma (`min_micro_paradas`) se integra en la variable **Pérdida de Velocidad** de la hora.
    *   **Visualización:** Este acumulado se muestra en la **Grilla Hora a Hora** como una columna de minutos perdidos.
    *   **Justificación:** El operador puede justificar este tiempo acumulado desde la grilla, asignando un motivo a la pérdida de velocidad de esa hora.
* 

### 5.2. **CRÍTICO: Separación Rendimiento vs Disponibilidad**
**REGLA ABSOLUTA:**
- **Justificar Pérdida de Rendimiento** → Se registra en tabla `justificaciones_rendimiento` → **NO crea eventos de PARADA**
- **Justificar Parada** → Se registra en tabla `productoeventos_produccion` con `tipo_evento='PARADA'` y `razon_id` → Impacta Disponibilidad

**Casos de uso correctos:**
1. **Hora con 0 producción** (máquina parada toda la hora):
   - Impacta: **Disponibilidad** 
   - NO tiene pérdida de rendimiento (no hubo producción que ralentizar)
   - Acción: Justificar la **parada** (tarjeta roja)

2. **Hora con producción solo 30 minutos** (resto del tiempo parada):
   - Los 30 min parados → Impactan **Disponibilidad** → Justificar **parada**
   - Los 30 min productivos → Se calcula rendimiento sobre esos 30 min únicamente
   - Si hubo microparadas (<X min) o ciclos lentos en esos 30 min → Justificar **pérdida de rendimiento**

3. **Hora completa produciendo, pero con microparadas y ciclos lentos**:
   - Disponibilidad: 100% (no hubo paradas ≥ XX min)
   - Rendimiento: < 100% por el "bolsón" acumulado (microparadas + ciclos lentos)
   - Acción: Justificar **pérdida de rendimiento** (NO parada)


**Persistencia:**
- `justificaciones_rendimiento`: Tabla dedicada con campos `maquina_id`, `hora_bloque`, `inicio_bloque`, `minutos_justificados`, `razon_id`
- Validación: `razon_id` debe existir en `maestro_razones_oee`.


## 6. Calidad (Quality)

$$C = \frac{\text{Piezas OK}}{\text{Total Piezas Producción}}$$
*(Donde Total Piezas = OK + Scrap)*

### 6.1. Registro de Scrap (Neteo)
*   Cuando se declara Scrap, se debe **DESCONTAR** esa cantidad del contador de Piezas OK.
*   **Lógica:** Se asume que el contador IoT cuenta "Ciclos Totales". Si 5 fueron malos, entonces:
    *   `Piezas OK = Ciclos - 5`
    *   `Scrap = 5`

---

## 7. Interfaz de Operador (Operador View)

### 7.1. Línea de Tiempo y Eventos
*   Debe reflejar fielmente los 3 orígenes de datos: Turnos (Fondo), Eventos Calendario (Franjas), Estados Máquina (Bloques color).

### 7.2. Tarjetas de Parada (Gestión)
*   **Contenedor Inferior:** Autoajustable al ancho de pantalla. maximo 2 filas para mostrar, paginado.
*   **Ciclo de Vida Tarjeta:**
    2.  **ROJO (Parada Mayor):** Máquina detenida >= Umbral (ej. 5 min), sin justificar. Alerta crítica.
    3.  **GRIS OSCURO (Justificada):** El operador asignó un motivo.
    4.  **GRIS CLARO (Auto-Justificada):** El sistema asignó motivo por Evento Calendario ([AUTO]).
    *   **Nota:** Las micro-paradas (< 5 min) NO generan tarjeta automática amarilla. Solo aparecen si el operador decide declararlas manualmente (convirtiéndose en Gris).
*   **Interacción:**
    *   Botón Parada -> Abre Tarjeta.
    *   Botón Marcha -> Cierra Tarjeta.
    *   Cambio Turno/Evento -> En caso de que hay tarjeta en curso, se cierra la tarjeta actual y abre nueva acorde al nuevo estado.

### 7.3. Grilla Hora a Hora (Gestión Integral)
*   **Concepto:** Centro de comando para correcciones y justificaciones de rendimiento/calidad.
*   **Columnas:** Hora, OP, Meta, Real, Scrap, % OEE, Pérdida Vel. (min).
*   **Acciones por Fila:**
    1.  **Justificar Rendimiento:** Permite asignar motivo al acumulado de "Pérdida Vel.".
    2.  **Gestionar Scrap:** Abre modal específico para la hora seleccionada.
        *   **Agregar:** Se selecciona Motivo y Cantidad.
        *   **Restar/Corregir:** Se debe visualizar *qué* se declaró previamente en esa hora y permitir eliminar o restar de un motivo específico (ej. "Me equivoqué, no eran 5 Manchas, eran 3").
*   **Regla de Validación:** `Scrap Total <= Total Producción` (No se puede tirar más de lo que se hizo).

### 7.4. Modales de Acción
*   **Diseño:** Título con icono SVG, Botones de acción al pie (Guardar=Primary, Cancelar=Secondary, en ese orden).
*   **Validación:** Incremental (+/- minutos) y chequeo de solapamiento de fechas.

## 8. Lógica de Gestión de Órdenes y 'SIN ORDEN' 

Este apartado detalla la lógica implementada para manejar situaciones donde la máquina opera sin una Orden de Producción (OP) formal, o con órdenes genéricas, asegurando la consistencia de datos y evitando errores de base de datos.

### 8.1. Estado 'PARADA' y Ausencia de Orden
*   **Regla de Oro:** Cuando una máquina está en estado **PARADA** (ej. tras pulsar "Quedar SIN ORDEN"), **NO se debe asociar ninguna orden**.
*   **Comportamiento:**
    *   El campo `orden_id` en el evento de parada se establece explícitamente en `NULL`.
    *   **No se crea** ningún registro ficticio "SIN ORDEN" en la tabla `ordenes_produccion`.
    *   Esto mantiene la base de datos limpia, evitando la proliferación de órdenes vacías cuando la máquina no está produciendo.

### 8.2. Estado 'PRODUCCION' sin Orden Asignada
Si la máquina inicia producción (señales de ciclo) sin tener una OP formal asignada (PCP), el sistema requiere una entidad para acumular los contadores de piezas, por lo que se crea una nueva orden temporal "SIN_ORDEN" + consecutivo, SIN ASOCIAR PRODUCTO, hasta que el operador deleccione la orden y/o el producto. a este punto el sistema asignara las piezas producidas hasta ese momento a la pieza seleccionada.

### 8.3. Nomenclatura de Órdenes Generadas
El sistema genera códigos de orden automáticamente siguiendo reglas estrictas para mantener orden y trazabilidad:

1.  **"SIN ORDEN" Pura (Sin Producto):**
    *   **Código:** `SIN ORDEN`
    *   **Uso:** Producción genérica donde no se especifica qué se está fabricando.
    *   **Restricción:** Solo puede haber **una** orden abierta con este código exacto por máquina/empresa a la vez.

2.  **"SIN ORDEN" con Producto (Manual o PCP):**
    *   **Contexto:** El operador selecciona un producto de la lista o crea uno manual, pero no hay una OP formal de Planning.
    *   **Código:** `SIN_ORDEN - NNNN` (Secuencial).
    *   **Ejemplo:** `SIN_ORDEN - 0001`, `SIN_ORDEN - 0002`.
    *   **Lógica:** Se busca el último secuencial global de la empresa y se incrementa (+1).

### 8.4. Creación de Productos Manuales
Cuando el operador ingresa un producto que no existe en el maestro (input manual):
*   **Código de Producto:** `MAN-NNNN` (Secuencial).
*   **Logica:** Busca el último producto con prefijo `MAN-` y suma 1 al consecutivo.
*   **Ejemplo:** `MAN-0001`, `MAN-0002`.
*   Esto evita códigos basados en timestamp o random que son difíciles de leer.

### 8.5. Cierre y Archivado de Órdenes
Al finalizar una orden (cambio de producto o "Quedar SIN ORDEN"):
*   Si la cantidad de piezas producidad de la orden que se cierra es igual a 0 CERO, la orden vuelve a estado CREADA, para que pueda volver a abrirse o ser editada por el PCP
*   Se la orden se termina con piezas producidas, la orden pasa a estado CERRADA
*   Si se pone en marcha la maquina sin orden abierta, Se abre un modal para que el operador seleccione una orden o cree una nueva temporal con productos existentes o de prueba

### 8.6. Control de Versiones de Cartas de Proceso (Actualizado 2026-03-18)
Para asegurar la mejora continua y la trazabilidad de las instrucciones de trabajo, el sistema utiliza un esquema de **versionado inmutable**:

1.  **Carga de Nueva Versión:** Al subir una carta con un `codigo_carta` ya existente (ej: `CP-001`), el sistema no sobrescribe el archivo anterior. En su lugar, crea un nuevo registro con un número de versión incremental (`v2`, `v3`, etc.).
2.  **Trazabilidad de Asignaciones:** Las asignaciones técnicas (`ProductAssignment`) apuntan al **ID específico** de una versión. Si se sube una nueva versión de una carta, las asignaciones existentes **permanecen vinculadas a la versión con la que fueron creadas** hasta que el PCP decida actualizarlas manualmente editando la asignación.
3.  **Visualización:** En todos los listados se muestra el indicador de versión (ej: `v1`, `v2`) junto al código para evitar confusiones al elegir o auditar procesos.
4.  **Eliminación:** Solo se pueden eliminar versiones que **no estén vinculadas** a ninguna asignación técnica activa.

*   **Multi-tenant:** El campo "Empresa" del login mapea al `client_id` de OAuth2 para filtrar usuarios por organización.

## 10. Acceso Remoto y Configuración de Red (WSL2)

Para visualizar la aplicación desde celulares u otras PCs en la misma red local (WiFi):

### 10.1. Exposición de Servicios
*   Los servicios deben correr escuchando en `0.0.0.0`:
    *   **Backend:** `uvicorn api:app --host 0.0.0.0 --port 8000`
    *   **Frontend:** `npm run dev -- --host`
*   Estas configuraciones ya están incluidas en el script `start.sh`.

## 11. Arquitectura de Despliegue y Contenerización (Render.com)

Para garantizar que el sistema funcione 24/7 sin depender de una PC local, se utiliza Docker y se despliega en Render.com.

### 11.1. Dockerización y Estabilidad Backend
*   **Backend (`Dockerfile`):** Imagen basada en `python:3.11-slim`. 
*   **Estabilidad Asíncrona (BackgroundTasks):** Se migró la lógica de notificaciones SSE del endpoint `/registrar` hacia `FastAPI.BackgroundTasks`. Esto soluciona errores de `no running event loop` que ocurrían bajo concurrencia de señales IoT, asegurando que el servidor responda inmediatamente (Código 200) y procese las notificaciones en segundo plano.
*   **.dockerignore:** Optimizado para despliegues rápidos en Render.com.

### 11.2. Guía de Despliegue en Render.com (Blueprints)
El archivo `render.yaml` centraliza la configuración. Sigue estos pasos para desplegar:

1.  **Entrar al Dashboard** de Render ([Render.com](https://render.com)).
2.  Haz clic en el botón **"New +"** y selecciona **"Blueprint"**.
3.  Conecta tu repositorio de GitHub de `Tecmaker`.
4.  Render detectará automáticamente el archivo `render.yaml` que he creado.
5.  Se te pedirá que revises los servicios. Antes de confirmar, deberás configurar las **Variables de Entorno** para el Backend:
    *   `DATABASE_URL`: (Cópiala de tu archivo `.env` local).
    *   `TELEGRAM_TOKEN`: (Cópiala de tu archivo `.env` local).
    *   `CHAT_ID`: (Cópiala de tu archivo `.env` local).
6.  Haz clic en **"Apply"**.
7.  **VITE_API_URL:** El frontend se vincula automáticamente a la URL del backend mediante la propiedad `fromService` (no requiere configuración manual).

**URLs de Producción:**
Una vez que Render termine de compilar (tardará unos minutos), tendrás 2 URLs:
*   **Backend:** `https://tecmaker-backend-xxxx.onrender.com`
*   **Frontend (Configuración y Operación):** `https://tecmaker-frontend-xxxx.onrender.com`

### 11.3. Conexión IoT (ESP32)
Una vez tengas la URL del **Backend**, el ESP32 debe apuntar a la URL de producción (ej: `https://tecmaker-backend-xxxx.onrender.com/registrar`). Esto permite que el hardware envíe datos directamente a la nube vía WiFi.

Pasos para el firmware (Ej. `Tecmaker_IoT.ino` o archivo `.cpp` equivalente):
1.  Abrir el archivo principal de firmware.
2.  Cambiar la variable/constante respectiva a la URL del backend por la de Render (añadiendo `/registrar` al final).
3.  Subir el código al ESP32.

> **IMPORTANTE**: A partir de este momento, el ESP32 enviará los datos directamente a la nube, y podrás ver los paneles desde cualquier lugar (celular o PC) sin necesidad de que tu computadora personal esté encendida.

## 12. Ordenes de Producción

*   Existen 3 estados de ordenes de producción:
    1.  **Activa:** La orden esta en producción.
    2.  **Cerrada:** La orden se cerro manualmente.
    3.  **Creada:** La orden se creo pero no se ha iniciado la producción.

## 13. Patrón de Refresco Silencioso (Silent Refresh)

Para evitar el "parpadeo" o "pantallazo" (loading spinner que oculta todo) al actualizar datos automáticamente:

1.  **Estado de Carga condicional**: La función de fetch debe aceptar un parámetro (ej: `showLoading = true`).
2.  **Lógica**:
    *   `fetchData(true)`: Se usa en `useEffect` inicial o botón de recarga manual. Muestra `loading`.
    *   `fetchData(false)`: Se usa en el `setInterval`. **No activa** `setLoading(true)`, solo actualiza los datos cuando llegan.
3.  **Ejemplo**:
    ```javascript
    const fetchData = async (showLoading = true) => {
        if (showLoading) setLoading(true);
        // ... fetch ...
        if (showLoading) setLoading(false);
    }
    
    useEffect(() => {
        fetchData(true); // Carga inicial (con spinner)
        const interval = setInterval(() => fetchData(false), 30000); // Recarga silenciosa
        return () => clearInterval(interval);
    }, []);
    ```

 ## 14. Estados del Boton Principal de la maquina:
-EN PRODUCCION
-MICROPARADA
-SETUP
-PARADA

  *En produccion, el boton es verde
  *En microparada, el boton es amarillo, y apece la barra de progreso de los x minutos programados para microparadas
    Queda visible el boton para declarar paradas, en el caso que se declare una parada, se detiene la barra de microparadas (tiempo acumulado va al bolson de microparas de esa hora) y comienza la de parada, justificada.
  *En setup, el boton es azul. y aparece la barra de progreso de los x minutos programados para setup.
    No tiene boton de justificacion, ya que se autojustificara como "SETUP" 
    Si se excede el tiempo programado para setup, se detiene la barra de setup y comienza la de parada, con posibilidad de justificar la parada.  
  *En parada:
    -El boton es rojo, si la parada ocurre dentro de un turno programado, se podra justificar y se podrá fraccionar la parada reiniciando el contador
    En el estado dirá: "PARADA INJUSTIFICADA" y el tiempo que lleva en ese estado. En caso que se justifique cambiará es texto Injustificada por la Justificacion seleccionada.
    -El Boton es Gris cuando la parada ocurre fuera de un turno programado, no se puede justificar y no se puede fraccionar la parada.
     El estado dira "PARADA FUERA DE TURNO" y el tiempo que lleva en ese estado. Esta padara No afecta al OEE
    -El Boton sera Gris tambien cuando el estado sea parado, y trasncurra en ese momento en el calendario una parada progrmada por PCP
     en este caso el mensaje dira: "PARADA PROGRAMADA" y el tiempo que lleva en ese estado. Esta padara No afecta al OEE
     Si el la parada excede el tiempo programado en el calendario, cambiara el estado a "PARADA INJUSTIFICADA" y el tiempo que lleva en ese estado.

## 15. Perfil de Usuario (Self-Service)

Todo usuario puede acceder a su propia página de perfil en `/perfil` haciendo clic en su avatar en el Sidebar.

### 15.1. ¿Qué puede editar el usuario?
- **Datos personales:** nombre, apellido, correo electrónico, teléfono, Telegram Chat ID, legajo.
- **Color de avatar** (ver sección 17).
- **Contraseña:** Requiere ingresar la contraseña actual como verificación de seguridad.

### 15.2. ¿Qué NO puede editar el usuario?
- `username` (nombre de usuario): inmutable, creado por el admin.
- `rol`: Solo lo puede cambiar un admin o developer.
- `empresa_id`: No se puede mover de empresa.
- ~~`legajo`: Solo el admin lo modifica.~~ (Ahora editable por el usuario en `/perfil`).

### 15.3. Endpoints involucrados
- `GET /perfil` → Devuelve datos completos del usuario logueado.
- `PUT /perfil` → Actualiza campos permitidos (whitelist en `api.py`, sin rol ni empresa).
- `PUT /perfil/password` → Valida contraseña actual antes de actualizar. Si la contraseña actual es incorrecta, responde HTTP 401.

### 15.4. Actualización en Tiempo Real (SPA)
Al guardar datos de perfil, se llama a `updateUser(patch)` del `AuthContext`. Esto actualiza el estado de React y el `localStorage` **sin necesidad de re-login**, por lo que el avatar del Sidebar refleja el cambio inmediatamente.

---

## 16. Presencia Online (Heartbeat)

El sistema determina si un usuario está "Online" de forma dinámica, sin releer la base de datos con un campo boolean obsoleto.

### 16.1. Columnas en tabla `usuarios`
- `last_activity TIMESTAMPTZ`: Actualizada en cada "latido" del usuario.
- ~~`is_online BOOLEAN`~~: **No se usa para determinar estado**. El estado online se **calcula dinámicamente** en cada query con:
  ```sql
  (u.last_activity > NOW() - INTERVAL '2 minutes') as is_online
  ```

### 16.2. ¿Qué activa el heartbeat?
- **Login exitoso** → `last_login = NOW()` y `last_activity = NOW()`.
- **Endpoint `GET /mensajes/no-leidos`** → El frontend lo consulta automáticamente cada 30 segundos si el usuario tiene token válido. En cada llamada se ejecuta `UPDATE usuarios SET last_activity = NOW()...`.

### 16.3. Timeout de Presencia
- Un usuario se considera **offline** si su `last_activity` es hace más de **2 minutos**.
- Esto significa que si el usuario cierra la pestaña o pierde red, el punto verde desaparece en máximo 2 minutos.

---

## 17. Avatar Color

Cada usuario puede personalizar el color de su avatar. Es la única forma de personalización visual disponible (no hay foto de perfil).

### 17.1. Paleta Oficial (10 colores)
Definida en `/frontend/src/utils/avatarColors.js`. Exporta el array `AVATAR_COLORS` y la función `getAvatarColor(key)`.

| Key | Color | Uso |
|---|---|---|
| `blue` | Azul | Default |
| `violet` | Violeta | - |
| `rose` | Rosa Rojizo | - |
| `amber` | Ámbar | - |
| `emerald` | Verde | - |
| `cyan` | Cian | - |
| `orange` | Naranja | - |
| `pink` | Rosa Fuerte | - |
| `slate` | Gris | - |
| `teal` | Verde Teal | - |

### 17.2. Almacenamiento
- Columna `avatar_color VARCHAR(20)` en tabla `usuarios`. Default: `'blue'`.

### 17.3. Renderizado (Regla de Implementación)
**IMPORTANTE:** No usar clases Tailwind dinámicas para el fondo del avatar (ej. `bg-blue-600` generado con string interpolación), porque Tailwind purga esas clases en build.
Usar siempre **`style={{ backgroundColor: avatarColor.hex }}`** con el valor `hex` del objeto de color.

### 17.4. Donde se usa
- `Profile.jsx` → Selector visual + preview.
- `Sidebar.jsx` → Avatar en el footer, con glow animado.
- Cualquier componente que muestre avatares de usuario debe importar `getAvatarColor` de `avatarColors.js`.

---

## 18. Grilla Hora a Hora — Indicador de Pérdida Pendiente

La celda "Pérdida Vel." de `HourlyProductionTable.jsx` usa un **mini-gráfico circular SVG** para indicar el estado de justificación:

- **Naranja vibrante + punto pulsante** (`animate-pulse`): hay minutos de pérdida de velocidad **sin justificar** en esa hora.
- **Gris apagado**: `minutos_justificados >= perdida_velocidad`, es decir, la hora ya está procesada al 100%.

El progreso del arco se calcula con:
```js
strokeDashoffset = (2 * Math.PI * 14) * (1 - Math.min(1, minutos_justificados / perdida_velocidad))
```
Esto permite ver visualmente si está al 50%, 80%, o completo de un vistazo.

---

## 19. Control de Acceso por Rol (RBAC)

El sistema implementa control de acceso basado en roles en **dos capas simultáneas**:
1. **Frontend - Sidebar:** Solo muestra los menús a los que el rol tiene acceso.
2. **Frontend - Rutas:** `ProtectedRoute` bloquea el acceso directo por URL.

### 19.1. Fuente de Verdad

El hook `usePermissions.js` (`/frontend/src/hooks/usePermissions.js`) es la **única fuente de verdad** para la lógica de permisos. Tanto `Sidebar.jsx` como `App.jsx` lo consumen.

### 19.2. Matriz de Permisos

| Sección             | Developer | Admin | Supervisor (PCP) | Operador |
|:--------------------|:---------:|:-----:|:----------------:|:--------:|
| Dashboard           | ✓         | ✓     | ✓                | ✓        |
| Panel Operador      | ✓         | ✓     | ✓                | ✓        |
| PCP                 | ✓         | ✓     | ✓                | ✗        |
| Configuración       | ✓         | ✓     | ✗                | ✗        |
| Usuarios            | ✓         | ✓     | ✗                | ✗        |
| Empresas (General)  | ✓         | ✗     | ✗                | ✗        |
| Mensajes / Perfil   | ✓         | ✓     | ✓                | ✓        |

### 19.3. Comportamiento al intentar acceder a una ruta no permitida

- Si **no hay sesión** → Redirige a `/login`.
- Si **hay sesión pero el rol no tiene permiso** → Muestra pantalla "Acceso Denegado" con ícono y mensaje explicativo. **No redirige**, para que el usuario entienda por qué no puede ver esa sección.

### 19.4. Cómo agregar un nuevo permiso

1. Agregar el booleano en `usePermissions.js` con los roles habilitados.
2. Usar `ProtectedRoute allowed={canViewNuevaSección}` en `App.jsx`.
3. Filtrar el ítem en el `menuItems` array de `Sidebar.jsx` con la condición correspondiente.
4. **NUNCA** duplicar la lógica de roles en línea dentro de los componentes.

---

## 20. Dashboard OEE Premium (`OeeAnalysisPremium.jsx`)

### 20.1. Arquitectura de Filtros

El dashboard usa filtrado en dos etapas: **Modal UI** → **Backend API**.

- El modal trabaja con `stagedLineas` / `stagedMaquinas` (estados temporales). Solo al presionar "Aplicar" se actualizan `selectedLineas` y `selectedMaquinas`, que disparan `fetchData`.
- **Lo que se envía al backend:** Solo `maquina_ids` (lista separada por coma). El filtro de líneas NO se envía al backend — fue traducido a máquinas en el frontend.

**Comportamiento del backend (`dashboard_service.py`):**
- `maquina_ids = None` → sin filtro, retorna todas las máquinas de la empresa.
- `maquina_ids = [5, 6]` → retorna exactamente esas máquinas (`AND m.id = ANY(%s)`).
- El check es `if target_m_ids:` (truthy) para evitar arrays vacíos aplicando filtros erróneos.

**Regla del frontend:**
```javascript
if (selectedMaquinas.length > 0) {
    params.maquina_ids = selectedMaquinas.join(',');
}
// Sin maquina_ids en params → backend retorna todo
```

### 20.2. Smart Toggle de Líneas (Modal)

- Si **todas las líneas están seleccionadas** y el usuario clica una línea → aísla esa línea y selecciona solo sus máquinas.
- Si ya hay selección parcial → toggle normal (agrega/quita en cascada).
- Botón **"Equipos"** en el header global (primer elemento del row de filtros): muestra badge numérico cuando hay filtro activo. Tiene un botón **×** rojo al lado para limpiar el filtro con un clic. Este botón afecta todas las tarjetas del dashboard.

### 20.3. Gráfico `HybridOeeChart` (SVG)

- **Distribución:** `x = paddingX + ((i + 1) / (n + 1)) * chartW`. 2 barras = 1/3 y 2/3 del ancho.
- **Labels 2 renglones:** `<tspan>` con `dy="14"`. Se parte el nombre en el último espacio (`lastIndexOf(' ')`).
- **paddingX = 40** (el card tiene `px-3` propio).
- **Maximize2:** expande de `lg:col-span-8` a `lg:col-span-12`.

### 20.4. Corrección Bug Timezone en `generate_series` (CRÍTICO)

Las queries SQL que usan `generate_series` para crear la grilla horaria almacenan timestamps en **hora local naive** (sin timezone). La condición para excluir horas futuras debe ser:

```sql
AND g.hora < %s::timestamp                          -- límite del período (end_ts)
AND g.hora + interval '3 hours' < CURRENT_TIMESTAMP  -- solo horas pasadas en local AR
```

**Por qué:** Los timestamps naive locales se almacenan como si fueran UTC. Sumarles 3 horas los convierte al UTC real, permitiendo compararlos correctamente con `CURRENT_TIMESTAMP` (que es UTC del servidor).

**No usar:** `CURRENT_TIMESTAMP + interval '3 hours'` como límite — esto incluye horas futuras del día operativo que aún no ocurrieron, generando `t_eff` negativos y OEE explosivo (>1000%).

### 20.5. DateRangePicker (`DateRangePicker.jsx`)

Componente de selección de rango de fechas estilo Power BI:
- Modos: Día, Semana, Mes, Año
- Quick ranges integrados: Hoy, Ayer, Semana, Mes
- Maneja timezones usando fecha local (`getFullYear/getMonth/getDate`) — NO `toISOString()` que usa UTC
- `fmtISO(date)` acepta tanto `Date` como string

---

## 21. Tendencia OEE Histórica

### 21.1. Concepto

Gráfico de líneas que muestra el OEE de los últimos N **días laborables con turnos en el calendario**. Es independiente del filtro de fechas del dashboard pero respeta el filtro de equipos.

### 21.2. Backend

- **Endpoint:** `GET /dashboard/oee-historico?maquina_ids=&n_dias=7`
- **Función:** `get_oee_historico()` en `dashboard_service.py`
- Busca los últimos N días con al menos un turno activo en `pcp_calendario_turnos`
- Excluye el día actual (debe estar cerrado) y días sin producción
- Calcula OEE real (D × R × C) por día usando la misma lógica que el dashboard principal
- **Importante:** El endpoint debe estar registrado en `api.py` **ANTES** del wildcard `/dashboard/{codigo_op}` para no ser interceptado

### 21.3. Frontend

**Tarjeta mini (siempre visible en columna derecha):**
- Gráfico SVG compacto (90px alto en reposo, 180px expandido)
- Curva bezier suave + área degradada azul
- Chip de tendencia `+X.Xpp` comparando primeros 3 vs últimos 3 días
- Punto hover con tooltip y línea vertical punteada
- Botón ⊡ para expandir

**Vista expandida (full-width, reemplaza KPIs + gráfico de barras):**
- Al activar: oculta secciones KPI principal y gráfico de barras (con `{!oeeHistoricoExpanded && ...}`)
- Ocupa todo el ancho del `<main>`
- Fetcha **20 días** al expandir, vuelve a **7** al colapsar
- Labels de valor OEE permanentes encima de cada punto (siempre visibles, se intensifican en hover)
- Fechas debajo del eje X con formato corto
- Grid horizontal con 5 niveles (0/25/50/75/100%)
- Color de línea: azul→verde si tendencia positiva, azul→rojo si negativa
- Usa el mismo filtro de equipos global del header

### 21.4. Re-fetch automático

```javascript
useEffect(() => {
    fetchOeeHistorico(selectedMaquinas, oeeHistoricoExpanded ? 20 : 7);
}, [selectedMaquinas, oeeHistoricoExpanded]);
```

---

## 22. Sistema de Email (Resend)

### 22.1. Proveedor y Configuración
- **Proveedor:** [Resend](https://resend.com) — API moderna, plan gratuito 3.000 emails/mes.
- **SDK:** `resend>=2.0.0` (instalado con pip).
- **Variables de entorno requeridas:**
  - `RESEND_API_KEY`: API key de Resend (en `.env` y en variables de Render.com).
  - `EMAIL_FROM`: Email remitente (actualmente `onboarding@resend.dev` para pruebas).
  - `FRONTEND_URL`: URL base del frontend (para los links en emails).

### 22.2. Módulo Central
- **`services/email_service.py`**: Único punto de llamada a la API de Resend.
  - `send_email(to, subject, html)`: Función base genérica.
  - `send_password_reset_email(to_email, username, empresa_nombre, reset_token)`: Template HTML de recuperación de contraseña.
  - `send_welcome_email(to_email, username, empresa_nombre, temp_password)`: Template HTML de bienvenida para nuevos usuarios.
- **CRÍTICO:** En Resend SDK v2, `SendParams` es un `TypedDict`. La clave `"from"` (palabra reservada de Python) se pasa como diccionario literal, NO como keyword argument `from_=...`.

### 22.3. Flujo Recuperación de Contraseña (Email Token)

1. **Tabla DB:** `password_reset_tokens` con columnas `token (UUID)`, `user_id`, `expires_at` (+1 hora), `used_at`.
2. **Endpoint `POST /recuperar-contrasena/solicitar`** (público):
   - Si el usuario tiene `correo` en DB → genera UUID, guarda en tabla, envía email.
   - Si no tiene correo → notifica admins por mensajería interna (código visible).
   - Siempre responde neutralmente (no revela si el usuario existe).
3. **Endpoint `GET /recuperar-contrasena/validar-token?token=xxx`** (público):
   - Verifica que el token exista, no haya expirado y no haya sido usado.
4. **Endpoint `POST /recuperar-contrasena/reset-password`** (público):
   - Operación atómica: marca `used_at = NOW()` y actualiza `hashed_password` en la misma transacción.
5. **Servicio:** `services/password_reset_service.py` — contiene toda la lógica.
6. **Frontend:** `pages/ResetPassword.jsx` — página pública en ruta `/reset-password?token=xxx`.

### 22.4. Limitación del Plan Gratuito de Resend
- Con `onboarding@resend.dev` como remitente, **solo se puede enviar al email registrado en la cuenta de Resend.**
- Para enviar a cualquier destinatario → verificar un dominio propio en el panel de Resend.
- Para cambiar el remitente: solo actualizar `EMAIL_FROM` en `.env` (y en Render.com).
---

## 23. Gestión de Registro Manual (PCP)

Este menú permite a los supervisores realizar correcciones masivas o ingresos históricos de producción cuando el hardware falló o hubo errores humanos.

### 23.1. Filosofía de Visualización: "Lo que brilla importa"
- **Regla del 50% (Ceros Opacos):** Para evitar la fatiga visual en grillas grandes, todos los valores en **0** (Paradas Programadas, No Programadas, Scrap, Pérdida de Rendimiento) se muestran con un **50% de opacidad**.
- **OEE Crítico:** Un OEE del **0%** se resalta siempre en **rojo vibrante**, alertando sobre la falta total de eficiencia en ese bloque horario.
- **Precisión:** Los minutos de pérdida de rendimiento se muestran redondeados a **2 decimales**.

### 23.2. Modo Edición y Acciones Contextuales
- **Toggle de Edición:** Al activarlo, se habilitan inputs técnicos para `Piezas OK`, `Scrap`, `Parada NP` y `P Programada`.
- **Botones Dinámicos:** Los botones de acción profunda (`Justificar`, `Declarar`, `Scrap`) están ocultos por defecto para mantener la limpieza. **Solo aparecen al pasar el mouse (hover)** sobre la fila específica mientras el Modo Edición esté activo.

### 23.3. Sincronización Matemática
- Cada cambio manual dispara un recalculo inmediato de la **Pérdida de Rendimiento** y el **OEE** de la fila. La lógica asegura que las piezas producidas se contrasten contra el tiempo realmente productivo (60 min - paradas).

---

## 24. Evolución del Esquema de Productos (Marzo 2026)

Para soportar una mayor profundidad en la gestión industrial y logística, se han añadido campos técnicos y de control al maestro de productos.

### 24.1. Nuevas Columnas (Tabla `productos`)

| Columna | Tipo | Descripción |
| :--- | :--- | :--- |
| **`ean_code`** | `TEXT` | Código de barras estándar (opcional). |
| **`stock_minimo`** | `NUMERIC` | Punto de re-orden para alertas de inventario (default 0). |
| **`plano_url`** | `TEXT` | URL/Path de Supabase para el plano o ficha técnica (Documentación). |
| **`attributes`** | `JSONB` | Propiedades dinámicas (ej: temperatura, presión, cavidades específicas). |

### 24.2. Indexación y Optimización
- Se creó un índice **GIN** sobre la columna `attributes` para permitir búsquedas eficientes dentro del JSONB:
  ```sql
  CREATE INDEX idx_productos_attributes_gin ON productos USING GIN (attributes);
  ```

### 24.3. Script de Migración (PostgreSQL)
```sql
ALTER TABLE productos ADD COLUMN IF NOT EXISTS ean_code TEXT;
ALTER TABLE productos ADD COLUMN IF NOT EXISTS stock_minimo NUMERIC DEFAULT 0;
ALTER TABLE productos ADD COLUMN IF NOT EXISTS plano_url TEXT;
ALTER TABLE productos ADD COLUMN IF NOT EXISTS attributes JSONB DEFAULT '{}';

CREATE INDEX IF NOT EXISTS idx_productos_attributes_gin ON productos USING GIN (attributes);
```

### 24.4. Integración en Frontend
- El modal de creación/edición ha sido reordenado en una grilla de 2 y 3 columnas para optimizar el espacio vertical.
- Los campos opcionales (`ean_code`, `stock_minimo`, `plano_url`) se integran visualmente con un estilo premium suave.
- El campo **Plano** permite la subida directa de archivos (PDF/Imagen) reutilizando el servicio de almacenamiento de Supabase.

---

## 25. Paleta de Colores Oficial

Este apartado estandariza los colores utilizados en el sistema para garantizar consistencia visual en futuros desarrollos.

### 25.1. Colores de la Interfaz (Superficies)
| Nivel | Clase Tailwind | Hex (Ref) | Uso |
| :--- | :--- | :--- | :--- |
| **Fondo Base** | `bg-slate-950` | `#020617` | Fondo principal del Header y Layout (Top Bar). |
| **Fondo Cuerpo** | `bg-slate-900` | `#0f172a` | Fondo de la aplicación principal y modales. |
| **Paneles** | `bg-slate-800` | `#1e293b` | Tarjetas (Cards), Sidebar y contenedores internos. |
| **Sub-paneles** | `bg-slate-800/50` | - | Encabezados de tablas y áreas de filtros. |
| **Bordes** | `border-slate-700` | `#334155` | Divisiones, bordes de componentes e inputs. |

### 25.2. Colores de Estado (Máquina y Sensores)
| Estado | Color | Clase Tailwind | Uso |
| :--- | :--- | :--- | :--- |
| **Producción** | Verde | `text-green-500` | Máquina operando / Producción constante. |
| **Parada** | Rojo / Rosa | `text-rose-500` | Parada imprevista o injustificada (Botonera/Iconos). |
| **Microparada** | Amarillo | `text-yellow-500` | Parada corta en curso o advertencia. |
| **Setup** | Azul | `text-blue-500` | Máquina en preparación o cambio de orden. |
| **Programada** | Gris | `text-slate-400` | Parada por calendario, mantenimiento o fuera de turno. |
| **IoT Online** | Cian | `text-cyan-400` | Dispositivo IoT conectado y pulsando. |
| **IoT Offline** | Rojo | `text-red-500` | Dispositivo IoT desconectado (Heartbeat fallido). |

### 25.3. Sistema de Avatares (Paleta de 10 colores)
Ubicación de referencia: `/frontend/src/utils/avatarColors.js`

| Key | Color | Hex | Shadow (Glow) |
| :--- | :--- | :--- | :--- |
| `blue` | Azul | `#2563eb` | `rgba(37,99,235,0.5)` |
| `violet` | Violeta | `#7c3aed` | `rgba(124,58,237,0.5)` |
| `rose` | Rosa | `#e11d48` | `rgba(225,29,72,0.5)` |
| `amber` | Ámbar | `#f59e0b` | `rgba(245,158,11,0.5)` |
| `emerald` | Verde | `#059669` | `rgba(5,150,105,0.5)` |
| `cyan` | Cian | `#06b6d4` | `rgba(6,182,212,0.5)` |
| `orange` | Naranja | `#f97316` | `rgba(249,115,22,0.5)` |
| `pink` | Rosa Fuerte| `#ec4899` | `rgba(236,72,153,0.5)` |
| `slate` | Gris | `#64748b` | `rgba(100,116,139,0.5)` |
| `teal` | Teal | `#14b8a6` | `rgba(20,184,166,0.5)` |
