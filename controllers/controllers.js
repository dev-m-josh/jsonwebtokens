
function postsRouter(req, res){

    res.json({
        success: true,
        message: "Added successfully!",
        addedUser: req.token
    });
 }


module.exports = { postsRouter }