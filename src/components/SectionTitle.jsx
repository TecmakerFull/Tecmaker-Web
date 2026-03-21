export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-6xl">
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-300 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
