import { initCarousel } from "../../ui/carousel";
import { api, createNewElement, timeAgo } from "../../utils";
import { orderBy } from "../../utils/orderBy";

export async function buildDetails(id) {
    const listing = await api.getListing(id, "?_seller=true&_bids=true");
    console.log(listing);
    const container = generateHTML(listing);
    return container;
}

function generateHTML(item) {
    const container = createNewElement("div", { className: "container" });
    const titleElement = createNewElement("h1", { textContent: item.title });
    const contentContainer = createNewElement("div", { className: "content-container" });

    // Carousel
    const imageCarousel = initCarousel(item.media.map((image) => createNewElement("img", { src: image, alt: item.title })));

    // Seller info
    const sellerInfo = createNewElement("div", { className: "seller-info" });
    const sellerAvatar = createNewElement("img", {
        className: "seller-avatar",
        src: item.seller.avatar,
        alt: item.seller.name,
        onerror: (e) => (e.target.src = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"),
    });
    const sellerTextContent = createNewElement("div", { className: "seller-text-content" });
    const sellerName = createNewElement("h3", { textContent: item.seller.name });
    const sellerEmail = createNewElement("p", { textContent: item.seller.email });
    const sellerWins = createNewElement("p", { textContent: `Wins: ${item.seller.wins.length}` });
    sellerTextContent.appendChild(sellerName);
    sellerTextContent.appendChild(sellerEmail);
    sellerTextContent.appendChild(sellerWins);

    sellerInfo.appendChild(sellerAvatar);
    sellerInfo.appendChild(sellerTextContent);

    // Current Bid
    const currentBid = createNewElement("div", { className: "current-bid" });
    const currentBidTitle = createNewElement("h2", { textContent: "Current Bid" });
    const currentTopBid = orderBy(item.bids, "amount", "desc")[0];
    const currentTopBidder = createNewElement("p", { textContent: currentTopBid.bidderName });
    const currentBidAmount = createNewElement("p", { textContent: `Amount: ${currentTopBid.amount}` });
    const bidTimeAgo = timeAgo(currentTopBid.created);
    const bidTimeAgoElement = createNewElement("p", { textContent: `${bidTimeAgo}` });
    const addBidForm = createNewElement("form", { className: "add-bid-form" });
    const addBidInput = createNewElement("input", { className: "add-bid-input", type: "number", placeholder: currentTopBid.amount ?? "Enter your bid" });
    const addBidButton = createNewElement("button", {
        className: "add-bid-button",
        textContent: "Bid",
        onclick: (e) => {
            e.preventDefault();
            console.log("adding bid!");
        },
    });

    addBidForm.appendChild(addBidInput);
    addBidForm.appendChild(addBidButton);

    currentBid.appendChild(currentBidTitle);
    currentBid.appendChild(currentTopBidder);
    currentBid.appendChild(currentBidAmount);
    currentBid.appendChild(bidTimeAgoElement);
    currentBid.appendChild(addBidForm);

    contentContainer.appendChild(imageCarousel);
    contentContainer.appendChild(sellerInfo);
    contentContainer.appendChild(currentBid);

    container.appendChild(titleElement);
    container.appendChild(contentContainer);
    return container;
}
