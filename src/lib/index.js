// Download cheats text file 
const createTextFile = (cheat) => {
  const link = document.createElement("a");
  const file = new Blob([cheat], {type: 'text/plain'});
  link.href=URL.createObjectURL(file)
  link.download = `gameID.txt`;
  link.click()
  URL.
  revokeObjectURL(link.href)
}


// Upload cheats txt file 
let fileInput;

async function handleFileSubmit() {
  const formData = new FormData();
  formData.append('file', fileInput.files[0])

  const response = await fetch('api/upload', {
    method: 'POST',
    body: formData
  })

  if (response.ok){
    const file = await response.json()
    console.log(file)
  } else {
    console.error('Error Uploading file:', response.statusText)
  }
}

