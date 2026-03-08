export async function translate(text:string,lang:string){

  const response = await fetch("http://localhost:5183/api/speech/translate",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      text:text,
      targetLang:lang
    })
  });

  return await response.text();
}