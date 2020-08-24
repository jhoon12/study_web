const modal = document.getElementById("modal");

const viewModal = () => {
  if (modal.style.opacity === '0') 
    modal.style.opacity = "1";
  else
    modal.style.opacity = "0"; 
};

document.getElementById("list").addEventListener("click", viewModal);
