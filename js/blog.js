// let index = {
//     blogDate : null;
//     init : function(){
//         this.blogDate = blog;
//         darwBlog(this.blogDate);
//       }
// }
//
//
// function darwBlog() {
//     let blogParent = document.getElementById('blog-area');
//
//     for (let i=0, len= blogDate.length; i<len; i++) {
//         let blogArea = document.createElement('div');
//         blogArea.className = "row"
//         blogParent.appendChild(blogArea);
//
//         // let blog = document.createElement('div');
//         // popolLeft.className = "col-md-6 img-sec left-effect";
//         // popolArea.appendChild(popolLeft);
//
//         let blogImg = document.createElement('img');
//         blogImg.className = "img-responsive";
//         blogImg.src = blogData[i].img;
//         blogArea.appendChild(blogImg);
//         console.log("", blogData[i].img)
//
//         let popolRight = document.createElement('div');
//         popolRight.className = "col-md-6 right-effect";
//         popolArea.appendChild(popolRight);
//
//
//         let contentBoxH3 = document.createElement('h3');
//         contentBoxH3.textContent = portfolioData[i].title;
//         popolRight.appendChild(contentBoxH3);
//
//         let contentBoxP = document.createElement('p');
//         contentBoxP.textContent = portfolioData[i].memo;
//         popolRight.appendChild(contentBoxP);
//
//         let contentA = document.createElement('a');
//         contentA.innerText = "Know more";
//         contentA.href = portfolioData[i].src;
//         popolRight.appendChild(contentA);
//
//         $(contentA).append($("<i class='fa fa-angle-right'>"));
//     }
// }
//
