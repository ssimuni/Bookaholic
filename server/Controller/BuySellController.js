import prisma from "../DB/conn.js";

export const createSellPost = async (req, res) => {
    const b_title = req.body.b_title;
    const b_authorname = req.body.b_authorname;
    const b_edition = req.body.b_edition;
    const b_numOfPages = Number(req.body.b_numOfPages);
    const b_description = req.body.b_description;
    const b_price = Number(req.body.b_price);
    const image = req.body.image;
    const b_quantity = Number(req.body.b_quantity);
    const category = req.body.category;
    const soldBy_Email = req.body.b_soldBy_Email;
    const newPost = await prisma.sellingBook.create({
        data: {
            b_title: b_title,
            b_authorname: b_authorname,
            b_edition: b_edition,
            b_numOfPages: b_numOfPages,
            b_description: b_description,
            b_price: b_price,
            b_quantity: b_quantity,
            category: category,
            soldBy_Email: soldBy_Email
        },
        image: {
            image: image
        }
    });
    console.log(newPost);
    res.send(newPost);
}

export const getBuyPosts = async (req, res) => {
    const posts = await prisma.sellingBook.findMany()

    console.log(posts);
    res.send(posts);
}

export const getAllBuySellPost = async (req, res) => {
    const gotAllBuySellPost = await prisma.sellingBook.findMany()

    console.log(gotAllBuySellPost);
    res.send(gotAllBuySellPost);
}

export const getTransactionBuySell = async (req, res) => {
    const gotTransactionBuySell = await prisma.order.findMany()

    console.log(gotTransactionBuySell);
    res.send(gotTransactionBuySell);
}