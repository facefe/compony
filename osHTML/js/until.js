

// 设置sessStorage

function setMiddlePage (page) {
    sessionStorage.setItem('middlePage', page);
}

function delMiddlePage() {
    sessionStorage.removeItem('middlePage');
}

function getMiddlePage() {
  return  sessionStorage.getItem('middlePage');
}


// let cat = localStorage.getItem('myCat');

// sessionStorage.removeItem('myCat');