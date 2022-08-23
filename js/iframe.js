var html = `<html>
<body>
<style>
 ${putCSS}
</style>
${putHTML}
<script>
${putJS}
</script>
</body>
</html>`;
var putHTML = "";
var putCSS = "";
var putJS = "";
var doc = [
  document.getElementById("html"),
  document.getElementById("css"),
  document.getElementById("js"),
  document.getElementById("demo")
];

doc[3].srcdoc = html;

setInterval(() => {
  doc[3].srcdoc = html;
  putHTML = doc[0].value;
  putCSS = doc[1].value;
  putJS = doc[2].value;
  html = `<html>
  <body>
  <style>
   ${putCSS}
  </style>
  ${putHTML}
  <script>
  ${putJS}
  </script>
  </body>
  </html>`;
}, 3000);
