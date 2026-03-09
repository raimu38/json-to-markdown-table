import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!input) {
      setOutput("");
      return;
    }

    try {
      const data = JSON.parse(input);

      if (!Array.isArray(data)) {
        setOutput("JSON must be an array");
        return;
      }

      const keys = Object.keys(data[0]);

      const header = `| ${keys.join(" | ")} |`;
      const divider = `| ${keys.map(() => "---").join(" | ")} |`;

      const rows = data.map(
        (row: any) => `| ${keys.map((k) => row[k]).join(" | ")} |`,
      );

      setOutput([header, divider, ...rows].join("\n"));
    } catch {
      setOutput("Invalid JSON");
    }
  }, [input]);

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">JSON to Markdown Table</h1>

        <textarea
          className="w-full border rounded p-2 mb-4 font-mono"
          rows={8}
          placeholder="Paste JSON array here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <textarea
          className="w-full border rounded p-2 mt-2 font-mono"
          rows={8}
          value={output}
          readOnly
        />

        <button
          onClick={copy}
          className="mt-3 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
