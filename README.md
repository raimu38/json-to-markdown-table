# JSON to Markdown Table

Convert JSON arrays into Markdown tables instantly.

https://json-to-markdown-table.raimu38.com

A small web tool that turns JSON data into Markdown tables you can paste into documentation, issues, or notes.

## Example

### Input

```json
[
  { "name": "apple", "price": 100 },
  { "name": "banana", "price": 80 },
  { "name": "orange", "price": 120 }
]
```

### Output

```markdown
| name   | price |
| ------ | ----- |
| apple  | 100   |
| banana | 80    |
| orange | 120   |
```

## Features

- Convert JSON array → Markdown table
- Instant conversion while typing
- One-click copy to clipboard
- No login required

## Usage

1. Paste a JSON array.
2. Markdown table is generated automatically.
3. Click **Copy** to copy the result.

## Local Development

```bash
git clone https://github.com/raimu38/json-to-markdown-table.git
cd json-to-markdown-table
npm install
npm run dev
```

## Build

```bash
npm run build
```

## License

MIT
