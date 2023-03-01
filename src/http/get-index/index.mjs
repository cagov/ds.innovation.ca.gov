// learn more about HTTP functions here: https://arc.codes/http
export async function handler(req) {
  console.log(process.env)
  return {
    statusCode: 200,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Design systems forms</title>
      </head>
      <body>
  
        <h1>
          API for design system site forms
        </h1>
        <p class="margin-bottom-8">
          The endpoint at ds.innovation.ca.gov/partner expects posts from the designsystem.webstandards.a.gov homepage partner signup form
        </p>
        
        <p class="margin-bottom-8">
          View documentation at:
        </p>
        <code>
          <a href="https://github.com/cagov/ds.innovation.ca.gov">https://github.com/cagov/ds.innovation.ca.gov</a>
        </code>
      
      </body>
      </html>
    `,
  };
}
