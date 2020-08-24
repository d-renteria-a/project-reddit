$('.post-button').click(function () {
    // Get input from post input fields
    let $newPost = $('#new-post-text')[0].value;
    let $newName = $('#new-post-name')[0].value;

    // Declare variables needed to create new post
    let styleClasses = 'class=' + '"col-md-6 col-md-offset-3 page-header post-block"';
    let postClass = 'class=' + '"post-text"'
    let postedByClass = 'class=' + '"post-by"';
    let nameClass = 'class=' + '"post-name"';
    let removePost = '<span class="remove-post">remove</span>';
    let commentPost = `<span class="comment-toggle">comments</span>`
    
    //check if input fields are empty
    if ($newPost == 0) {
        alert('Your post is empty!');
        return false
    } else if ($newName == 0) {
        alert('Your post needs a name!');
        return false
    }

    //Append formatted input and variables to '.posts'  
    const createNewPost = function() {
        $('.posts').append(`<div ${styleClasses}>${removePost} ${commentPost}<p ${postClass}>${$newPost}</p><br>
        <div class="comment-block"></div>
        <p ${postedByClass}>Posted By: <h5 ${nameClass}>${$newName}</h5></p></div>`);
    }

    createNewPost();
    
    //Reset input fields to default
    $('#new-post-text')[0].value = '';
    $('#new-post-name')[0].value = '';

    //Remove selected post
    $('.remove-post').click(function () {
        $(this).parent().remove();
    })

      
    $('.comment-toggle').click(function () {
        let selectedComment = $(this).parent().find('.comment-block')
        let selectedCommentClass = selectedComment.attr('class')
        
        //Create comment input fields under a post if it does not have any
        if(selectedComment.children().length < 1) {
            addCommentFields(selectedComment);
        }

        //Enable user to toggle comments
        if(selectedCommentClass === 'comment-block') {
            selectedComment.attr('class', 'comment-block show')
        } else if (selectedCommentClass === 'comment-block show') {
            selectedCommentClass += ' hide';
            selectedComment.attr('class', selectedCommentClass)
        }
    })
})


const addCommentFields = function(comment) {
    //Append formatted input fields
    comment.append(
    `<form>
        <div class="form-group">
            <input type="text" class="form-control comment-input" 
                id="new-comment-text" 
                placeholder="Comment Text">
            <input type="text" class="form-control comment-input" 
                id="new-comment-name" 
                placeholder="User Name">                                                    
            <button type="button" class="btn btn-default comment-button">Post Comment</button>
        </div>
    </form>`)
   
    //Post formatted comment on 'Post Button' click
    $('.comment-button').click(function () {
        //Declare comment input values as variables
        let newComment = $('#new-comment-text')[0].value;
        let userName = $('#new-comment-name')[0].value;
        
        //Add times glyphicon, select clicked comment-block
        let commentStyleClasses = 'class=' + '"comments"';
        let commentSelector = $(this).parents('.comment-block')
        let timesGlyph = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'

        //Prepend formatted comment with icon under selected post
        commentSelector.prepend(`<div ${commentStyleClasses}><span>${newComment}Posted By: ${userName}</span>${timesGlyph}</div>`)

        //Allow timesGlyph to remove the comment when clicked 
        $('.glyphicon-remove').click(function() {
            $(this).parent().remove();
        })

        //Reset input fields to default
        $('#new-comment-text')[0].value = '';
        $('#new-comment-name')[0].value = '';
    })
}
