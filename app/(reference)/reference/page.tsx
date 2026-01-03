import Image from "next/image"

export default function Reference() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">Reference Layout (for internal review)</h1>
      <p className="mt-2 text-slate-600 text-sm">
        This page embeds the provided reference screenshot for design inspiration. The live homepage keeps a different, minimal look as requested.
      </p>
      <div className="mt-6 rounded-lg border bg-white p-2">
        <Image
          src="/images/reference.png"
          alt="Reference website screenshot"
          width={768}
          height={1749}
          className="w-full h-auto rounded"
        />
      </div>
    </main>
  )
}
