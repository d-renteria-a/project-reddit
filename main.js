//change header font type to correct one

//start <p> to input comments
    //*figure out the template you need for a single comment*
        // use this template to identify what you need to insert with JS
    
    //setup JS to programmatically add and insert comments
        //Take info from form
        //Insert it into comment template
        //push into the html   
    
    
    
    
        //Access the comment class with JQuery
        //setup a way to change it to the input from the form
        //save the name from the form to a variable
        //figure out how to add a variable to the end of an inner html
            //You know how to do this!!!! REMEMBER!!!
            //JQuery really helps with this!!
        //setup a click event listener on the post button so it creates the required elements and inserts them to the page
        //Make sure all the comments are separated correctly by a line like the header


//

$('button').click(function () {
    let $newPost = $('#new-post-text')[0].value;
    let $newName = $('#new-post-name')[0].value;
    
    let styleClasses = 'class=' +'"col-md-6 col-md-offset-3 page-header comment-block"';
    let postByClass = 'class=' + '"post-by"';
    let nameClass = 'class=' +'"comment-name"';
    
    $('.comments').append(`<div ${styleClasses}><p>${$newPost}</p>
    <p ${postByClass}>Posted By: <h5 ${nameClass}>${$newName}</h5></p></div>`)
    
    $('#new-post-text')[0].value = '';
    $('#new-post-name')[0].value = '';
})
