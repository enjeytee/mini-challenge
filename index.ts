const reviewTotalDisplay = document.querySelector("#reviews") as HTMLHeadingElement;
const returningUserDisplay = document.querySelector("#returning-user") as HTMLSpanElement;
const userNameDisplay = document.querySelector("#user") as HTMLSpanElement;
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: "Neil John A. Trajano",
        stars: 3,
        loyaltyUser: false,
        date: "October 4, 1975"
    },
    {
        name: "Neil Patrick Trajano",
        stars: 5,
        loyaltyUser: true,
        date: "January 1, 2004"
    },
    {
        name: "Joana B. De Jesus",
        stars: 4,
        loyaltyUser: true,
        date: "July 19, 1975"
    },
    {
        name: "Nathaniel Kin D. Barrera",
        stars: 3,
        loyaltyUser: false,
        date: "December 20, 1997"
    }
]
const showReviewsDescription = (totalReview: number, oldestReviewer: string, loyaltyUserOldest: boolean, latestReviewer: string, loyaltyUserLatest: boolean) => {
    reviewTotalDisplay.innerHTML = `
        <div>Total reviews: ${totalReview}</div>
        <div>Oldest review by: ${oldestReviewer} ${loyaltyUserOldest ? "⭐" : ""}</div>
        <div>Latest review by: ${latestReviewer} ${loyaltyUserLatest ? "⭐" : ""}</div>
        `;
};

const latestReview = reviews.reduce((accumulator, current) => {
    // if (!Object.keys(accumulator).length) {
    //     accumulator = current
    // } 
    if (new Date(accumulator.date) > new Date(current.date)) {
        return accumulator
    } else {
        accumulator = current
        return accumulator;
    };
}, {
    name: "",
    stars: 0,
    loyaltyUser: false,
    date: "January 1, 1900"
});
const oldestReview = reviews.reduce((accumulator, current) => {
    // if (!Object.keys(accumulator).length) {
    //     accumulator = current
    // } 
    if (new Date(accumulator.date) < new Date(current.date)) {
        return accumulator
    } else {
        accumulator = current
        return accumulator;
    };
}, {
    name: "",
    stars: 0,
    loyaltyUser: false,
    date: "December 31, 9999"
});
const you: {
    firstName: string;
    lastName: string;
    age: number;
    isReturning: boolean;
    stayedAt: string[];
} = {
    firstName: "John",
    lastName: "Trajano",
    age: 46,
    isReturning: true,
    stayedAt: [
        "San Fernando, Pampanga", 
        "Tondo, Manila", 
        "California, USA"
    ]
}
console.log(you.firstName)
const populateUser = (isReturning: boolean, userName: string) => {
    const name = `${userName}`
    returningUserDisplay.innerHTML = `${isReturning ? `back` : ""}`;
    userNameDisplay.innerHTML = name;
};
const {firstName, lastName, age, isReturning} = you;
populateUser(isReturning, firstName)
showReviewsDescription(reviews.length, oldestReview.name, oldestReview.loyaltyUser, latestReview.name, latestReview.loyaltyUser);