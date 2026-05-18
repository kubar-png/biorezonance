export default function SoftGradient() {
  return (
    <div
      className="relative w-full max-w-[440px] aspect-[1/1.1] rounded-[12px] overflow-hidden"
      aria-hidden
      style={{
        background:
          "linear-gradient(160deg, #d9d7ee 0%, #e3e1f1 35%, #ebe9ee 55%, #f0eddc 100%)",
      }}
    >
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(200,196,224,0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(230,228,200,0.4), transparent 55%)",
        }}
      />
    </div>
  );
}
