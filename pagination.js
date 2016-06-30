/**
 * Pagination is common on news sites, e-commerce, and blogs. Write a function that
 * prints out the pagination text.
 */

 function paginationText(pageNumber, pageSize, totalProducts) {
     var intermediate = (pageSize * (pageNumber - 1));
     var onPage = totalProducts - intermediate;
     var first = intermediate + 1;
     var second = intermediate + onPage;
     if ((pageNumber === 1) && (pageSize < totalProducts)) {second = pageSize;}
     var sentence = "Showing " + first + " to " + second + " of " + totalProducts + " Products.";
      console.log(sentence);
     return sentence;
  }


console.assert(paginationText(1, 10, 30) === 'Showing 1 to 10 of 30 Products.');
console.assert(paginationText(3, 10, 26) === 'Showing 21 to 26 of 26 Products.');
console.assert(paginationText(1, 10,  8) === 'Showing 1 to 8 of 8 Products.');
