import prisma from '../db';
import primsa from '../db';

export const getOneUpdate = async (req, res) => {
    const update = primsa.update.findUnique({
        where: {
            id: req.params.id
        }
    });
    res.json({data: update});
}
export const getUpdates = async (req, res) => {
    const products = await primsa.product.findMany({
        where: {
            belongsToId: req.params.id
        },
        include: {
            update: true
        }
    });
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.update]
    }, []);
    res.json({data: updates});
}
export const deleteUpdate = async (req, res) => {
    const products = await primsa.product.findMany({
        where: {
            belongsToId: req.params.id
        },
        include: {
            update: true
        }
    });
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.update]
    }, []);
    const match = updates.find(update => update.id === req.params.id);
    if (!match){
        return res.json({message: 'no update data'})
    }
    const deletedProduct = prisma.update.delete({
        where: {
            id: req.params.id
        }
    })
    res.json({data: deletedProduct });
}

export const updateUpdate = async (req, res) => {
    const products = await primsa.product.findMany({
        where: {
            belongsToId: req.params.id
        },
        include: {
            update: true
        }
    });
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.update]
    }, []);
    const match = updates.find(update => update.id === req.params.id);
    if (!match){
        return res.json({message: 'no update data'})
    }
    const updateUpdate = await prisma.update.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })
    res.json({data: updates});
}

export const createUpdate = async (req, res) => {
    const product = await primsa.product.findUnique({
        where: {
            id: req.body.productId
        }
    })
    if (!product){
        res.json({message: "no product found"})
    }
    const update = await primsa.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            product: { connect: { id: product.id }} 
        } 
    });
    res.json({data: update})
}