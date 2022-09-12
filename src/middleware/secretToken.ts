let secretToken = 'thogawa';

export const checkToken = (req, res, next) => {
    if(req.body.token === secretToken){
        next();
    }else{
        res.status(401).json({message: 'Unauthorized'});
    }
};