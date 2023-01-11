import jwt from 'jsonwebtoken';

// eslint-disable-next-line import/prefer-default-export
export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decoded.id;

            next();
        } catch (e) {
            return res.json({
                message: 'Access denied',
            });
        }
    } else {
        return res.json({
            message: 'Access denied',
        });
    }
};
