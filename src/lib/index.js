

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

