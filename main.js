
//Add comments for readability!!!!!!

$('.post-button').click(function () {
    let $newPost = $('#new-post-text')[0].value;
    let $newName = $('#new-post-name')[0].value;

    let styleClasses = 'class=' + '"col-md-6 col-md-offset-3 page-header post-block"';
    let postClass = 'class=' + '"post-text"'
    let postedByClass = 'class=' + '"post-by"';
    let nameClass = 'class=' + '"post-name"';
    let removePost = '<span class="remove-post">remove</span>';
    let commentPost = `<span class="comment-toggle">comments</span>`
    
    if ($newPost == 0) {
        alert('Your post is empty!');
        return false
    } else if ($newName == 0) {
        alert('Your post needs a name!');
        return false
    }

    const createNewPost = function() {
        $('.posts').append(`<div ${styleClasses}>${removePost} ${commentPost}<p ${postClass}>${$newPost}</p><br>
        <div class="comment-block"></div>
        <p ${postedByClass}>Posted By: <h5 ${nameClass}>${$newName}</h5></p></div>`);
    }

    createNewPost();
    
    $('#new-post-text')[0].value = '';
    $('#new-post-name')[0].value = '';

    $('.remove-post').click(function () {
        $(this).parent().remove();
    })

    $('.comment-toggle').click(function () {
        let selectedComment = $(this).parent().find('.comment-block')
        let selectedCommentClass = selectedComment.attr('class')
        
        if(selectedComment.children().length < 1) {
            addCommentFields(selectedComment);
        }

        if(selectedCommentClass === 'comment-block'|| selectedCommentClass === 'comment-block hide') {
            selectedComment.attr('class', 'comment-block show')
        } else if (selectedCommentClass === 'comment-block show') {
            selectedCommentClass += ' hide';
            selectedComment.attr('class', selectedCommentClass)
        }
    })
})


const addCommentFields = function(comment) {
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
   
    $('.comment-button').click(function () {
        let newComment = $('#new-comment-text')[0].value;
        let userName = $('#new-comment-name')[0].value;
        let commentStyleClasses = 'class=' + '"comments"';
        let commentSelector = $(this).parents('.comment-block')
        let timesGlyph = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'

        const insertTimesGlyph = function() {
            let timesGlyph = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
            $('.comment-name').append(timesGlyph)
        }

        commentSelector.prepend(`<div ${commentStyleClasses}><span>${newComment}Posted By: ${userName}</span>${timesGlyph}</div>`)

        $('.glyphicon-remove').click(function() {
            $(this).parent().remove();
        })
    })
}
