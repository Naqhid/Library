const addBooksbutton = document.getElementById('addbook');
const close = document.getElementById('close');
const modelform = document.getElementById('model');
const displayform='--displayform';
const submitbutton = document.getElementById('submitbutton');
/* form values*/
const resetinputbname = document.getElementById('addBookName');
const resetinputaname = document.getElementById('addAuthorName');
const resetinputpages = document.getElementById('addNumberPages');
/* --- */

const booklist = document.getElementById('booklist');
let library = [];
addBooksbutton.addEventListener('click',()=>{
    document.documentElement.style.setProperty(displayform,'flex');
})

close.addEventListener('click',()=>{
    document.documentElement.style.setProperty(displayform,'none');
})

const addNewbook = (bName, aName, nPages, rStatus=false) => {
    const bookObject = {bookname: bName, authorname: aName, pages: nPages, status: rStatus}
    library.push(bookObject); 
    addBookDom(bookObject);
    console.log('yara');
}

const addBookDom = (book)=>{
    // <div> to group the book
    const divbook = document.createElement('div');
    divbook.classList.add('books');
    
    //<h2> book title
    const h2bookname = document.createElement('h2');
    h2bookname.textContent = book.bookname;
    divbook.appendChild(h2bookname);
    
    //<p> author name
    const pauthor = document.createElement('p');
    pauthor.textContent = book.authorname;
    divbook.appendChild(pauthor);

    // <p> number of pages
    const ppages = document.createElement('p');
    ppages.textContent = book.pages;
    divbook.appendChild(ppages);

    // <button> read status
    const readButton = document.createElement('button');
    readButton.textContent = book.status;
    readButton.classList.add('btn');
    readButton.classList.add('btn-dark');
    divbook.appendChild(readButton);
    
    // change read status
    readButton.addEventListener('click',(e)=>{
        if (e.target.textContent == 'false'){
            e.target.textContent = 'true'
        }
        else {
            e.target.textContent = 'false'
        }
    })

    // <button> to remove
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove';
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-dark');
    divbook.appendChild(deleteButton);

    //Remove chield divbook from the parent booklist div
    deleteButton.addEventListener('click',(e)=>{
        booklist.removeChild(divbook);
    })

    //add the book to the page
    booklist.appendChild(divbook);
}
submitbutton.preventDefault;

// get the info from forms
    submitbutton.addEventListener('click',(e)=>{
    e.preventDefault();
    const bname = document.getElementById('addBookName').value;
    const aname = document.getElementById('addAuthorName').value;
    const npages = document.getElementById('addNumberPages').value;
    addNewbook(bname,aname,npages);

    resetinputbname.value='';
    resetinputaname.value='';
    resetinputpages.value='';
    
    document.documentElement.style.setProperty(displayform,'none');
})

