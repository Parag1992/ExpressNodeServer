var constants = require('../constant');
const errorHandler = (err,req,res,next) => {
    const statusCode=res.statusCode | 500;

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                        title:"Validation Error",
                        message:err.message,
                        stackTrace:err.stack
                    });
            break;

        case constants.NOT_FOUND:
            res.json({
                title:"Page not found",
                message:err.message,
                stackTrace:err.stack
            });
            break;
        
        case constants.UNAUTHORIZED:
            res.json({
                title:"Page not found",
                message:err.message,
                stackTrace:err.stack
            });
        break;
    }
    
};

module.exports=errorHandler;