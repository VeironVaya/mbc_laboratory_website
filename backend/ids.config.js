const IDS_OPTIONS = {
    blockOnMatch: true,
    logSnippetLen: 200
  };
  
  const rules = [
    {
      id: 1001,
      name: "XSS <script>",
      regex: /<script.*?>/i
    },
    {
      id: 1002,
      name: "SQL Injection keywords",
      regex: /\b(union|select|drop)\b/i
    },
    {
      id: 1003,
      name: "Directory traversal",
      regex: /\.\.\/+/
    }
  ];
  
  module.exports = { rules, IDS_OPTIONS };
  