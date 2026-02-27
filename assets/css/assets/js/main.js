// مثال ضغط الصور (عرض فقط)
function compressImage() {
  const input = document.getElementById('imageFile');
  const preview = document.getElementById('imgPreview');
  const file = input.files[0];
  if(!file) return alert("Please select an image first!");
  const reader = new FileReader();
  reader.onload = e => preview.src = e.target.result;
  reader.readAsDataURL(file);
}
