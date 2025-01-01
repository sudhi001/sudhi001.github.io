export default function ParaGraph({ data }) {
    return (
      <p className="pt-7 font-mono text-foreground">
        {data || "No content available."}
      </p>
    );
  }
  