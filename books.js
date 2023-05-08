let books = {
    data: [
      {
        Title: "Python",
        sub: "Python",
        author: "Guido",
        image: "python.jpg",
      },
      {
        Title: "Computer Networks",
        sub: "Computer_Networks",
        author: "Kevin",
        image: "cn.jpg",
      },
      {
        Title: "Machine Learning",
        sub: "Machine_Learning",
        author: "Joe",
        image: "ml.jpg",
      },
      {
        Title: "Data Science",
        sub: "Data_Science",
        author: "Dev",
        image: "ds.jpg",
      },
      {
        Title: "Python",
        sub: "Python",
        author: "Joel",
        image: "python.jpg",
      },
      {
        Title: "Mobile Communications",
        sub: "Mobile_Communications",
        author: "Poorani",
        image: "mc.jpg",
      },
      {
        Title: "Computer Networks",
        sub: "Computer_Networks",
        author: "Shruthi",
        image: "cn.jpg",
      },
      {
        Title: "Mobile Communications",
        sub: "Mobile_Communications",
        author: "Peter",
        image: "mc.jpg",
      },
      {
        Title: "Machine Learning",
        sub: "Machine_Learning",
        author: "Elsa",
        image: "ml.jpg",
      },
      {
        Title: "Python for Intermediate",
        sub: "Python",
        author: "Rossum",
        image: "python.jpg",
      },
      {
        Title: "Data Science for beginners",
        sub: "Data_Science",
        author: "Akshala",
        image: "ds.jpg",
      },
      {
        Title: "Machine Learning Fundamentals",
        sub: "Machine_Learning",
        author: "Sachin",
        image: "ml.jpg",
      },
      {
        Title: "Python Intermediate",
        sub: "Python",
        author: "Mani",
        image: "python.jpg",
      },
      {
        Title: "Computer Networks",
        sub: "Computer_Networks",
        author: "Lekha",
        image: "cn.jpg",
      },
      {
        Title: "Data Science for Beginners",
        sub: "Data_Science",
        author: "Gopal",
        image: "ds.jpg",
      },
      {
        Title: "Mobile Communications",
        sub: "Mobile_Communications",
        author: "Farooq",
        image: "mc.jpg",
      },
      {
        Title: "Data Science Intermediate",
        sub: "Data_Science",
        author: "Madhan",
        image: "ds.jpg",
      },
      {
        Title: "Computer Networks",
        sub: "Computer_Networks",
        author: "Britto",
        image: "cn.jpg",
      },
      {
        Title: "Machine Learning Basics",
        sub: "Machine_Learning",
        author: "David",
        image: "ml.jpg",
      },
      {
        Title: "Python for Beginners",
        sub: "Python",
        author: "Ashok",
        image: "python.jpg",
      },
      {
        Title: "Machine Learning",
        sub: "Machine_Learning",
        author: "Vishnu",
        image: "ml.jpg",
      },
      {
        Title: "Data Science for Intermediate",
        sub: "Data_Science",
        author: "Roshan",
        image: "ds.jpg",
      },
      {
        Title: "Data Science",
        sub: "Data_Science",
        author: "Gowtham",
        image: "ds.jpg",
      },
      {
        Title: "Mobile Communications",
        sub: "Mobile_Communications",
        author: "Kavya Shruthi",
        image: "mc.jpg",
      },
      {
        Title: "Computer Networks",
        sub: "Computer_Networks",
        author: "Vishal",
        image: "cn.jpg",
      },
      {
        Title: "Machine Learning for Pro",
        sub: "Machine_Learning",
        author: "Ana",
        image: "ml.jpg",
      },
      {
        Title: "Computer Networks Fundamentals",
        sub: "Computer_Networks",
        author: "Elsa",
        image: "cn.jpg",
      },
      {
        Title: "Data Science Tutorials",
        sub: "Data_Science",
        author: "George",
        image: "ds.jpg",
      },
      {
        Title: "Python for beginners",
        sub: "Python",
        author: "Alok",
        image: "python.jpg",
      },
      {
        Title: "Mobile Communications Intermediate",
        sub: "Mobile_Communications",
        author: "Mari",
        image: "mc.jpg",
      },
      {
        Title: "Computer Networks for Beginners",
        sub: "Computer_Networks",
        author: "Abhi",
        image: "cn.jpg",
      },
      {
        Title: "Data Science Advanced",
        sub: "Data_Science",
        author: "Priya",
        image: "ds.jpg",
      },
      {
        Title: "Machine Learning Tutorial",
        sub: "Machine_Learning",
        author: "Kavya",
        image: "ml.jpg",
      },
    ],
  };
  
  for (let i of books.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.sub, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container2");

    let name = document.createElement("h5");
    name.classList.add("books-Title");
    name.innerText = i.Title.toUpperCase();
    container.appendChild(name);

    let author = document.createElement("h6");
    author.innerText = i.author;
    author.classList.add("author-name");
    container.appendChild(author);

    card.appendChild(container);
    document.getElementById("books").appendChild(card);
  }

  function search_book(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }

  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".books-Title");
    let cards = document.querySelectorAll(".card");
    var a=0;
    if (searchInput==""){
      alert("Please enter the title of the Book!!!");
    }
  
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        a=1;
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
      
    });
    if (a==0){
      alert("We are sorry, the book isn't available.");
    }
  });

  window.onload = () => {
    search_book("all");
  };