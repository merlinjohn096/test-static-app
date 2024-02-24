module.exports = async function (context, req) {
    const name = process.env.REACT_APP_NAME;
    context.res.json({
        text: `Hello ${name}`
    });
};