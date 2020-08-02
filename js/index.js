let index = {
    portfolioData : null,
    blogData : null,
    init : function(){
        this.portfolioData = portfolio;
        drawPopol(this.portfolioData);
        this.blogData = blog;
        darwBlog(this.blogData);
    }
}

function drawPopol(portfolioData){
    let popolParent = document.getElementById('portfolio-area');

    for (let i=0, len=portfolioData.length; i<len; i++) {

        let popolArea = document.createElement('div');
        popolArea.className = "row";
        popolParent.appendChild(popolArea);

        let popolLeft = document.createElement('div');
        popolLeft.className = "col-md-6 img-sec left-effect";

        let siteImg = document.createElement('img');
        siteImg.className = "img-responsive left-effect";
        siteImg.src = portfolioData[i].img;
        popolLeft.appendChild(siteImg);
        console.log("", portfolioData[i].img)

        let popolRight = document.createElement('div');
        popolRight.className = "col-md-6 right-effect";

        let contentBoxH3 = document.createElement('h3');
        contentBoxH3.textContent = portfolioData[i].title;
        popolRight.appendChild(contentBoxH3);

        let contentBoxP = document.createElement('p');
        contentBoxP.textContent = portfolioData[i].memo;
        popolRight.appendChild(contentBoxP);

        let contentA = document.createElement('a');
        contentA.innerText = "Know more";
        contentA.href = portfolioData[i].src;
        popolRight.appendChild(contentA);

        if ( i % 2 === 0) {
            popolArea.appendChild(popolLeft);
            popolArea.appendChild(popolRight);
        } else {
            popolArea.appendChild(popolRight);
            popolArea.appendChild(popolLeft);
        }

        $(contentA).append($("<i class='fa fa-angle-right'>"));
    }

    // if (drawPopol.classList.contains != 'left-effect') {
    //
    // } else {
    //
    // }
}

function darwBlog(blogData){

    let blogParent = document.getElementById('blog-area');
    let blogArea = document.createElement('div');
    blogArea.className = "row"
    blogParent.appendChild(blogArea);

    for (let i=0, len=blogData.length; i<len; i++) {

        let blogLeft = document.createElement('div');
        blogLeft.className = "col-lg-3 col-md-6 col-sm-6 text-center member-block";
        blogArea.appendChild(blogLeft);

        let src = document.createElement('a');
        src.href = blogData[i].src;
        blogLeft.appendChild(src);

        let blogImg = document.createElement('img');
        blogImg.className = "up-effect";
        blogImg.src = blogData[i].img;
        src.appendChild(blogImg);

        let blogcontentBoxH3 = document.createElement("h3");
        blogcontentBoxH3.className = "up-effect";
        blogcontentBoxH3.textContent = blogData[i].title;
        blogLeft.appendChild(blogcontentBoxH3);

        let blogcontentBoxP = document.createElement('p');
        blogcontentBoxP.textContent = blogData[i].memo;
        blogLeft.appendChild(blogcontentBoxP);
    }
}

