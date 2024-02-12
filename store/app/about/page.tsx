import Image from "next/image"

export default function About() {

    const familyEmployees = [{   
        name: "Mark Critchfield",
        title: "President",
        summary: "Mark is the youngest of the four original brothers who helped shape our legacy and still holds it down. Mark functions primarily at our wholesale plant, but he's not afraid to get down and dirty and pick up a knife every now and again.",
        src: "/markc.jpg"
    }, 
    {
        name: "Larry McMillan",
        title: "CEO",
        summary: "Larry joined Critchfield's back in 2007 and has been a great addition to the company. He handles Critchfield's insurance, leasing agreements, and more. Larry is originally from Chicago but came to Lexington due to his love for the Bluegrass state.",
        src: "/anthonyc.jpg"
    },
    {
        name: "Anthony Critchfield",
        title: "Store Manager",
        summary: "Anthony is Larry Critchfield's youngest son and has been part of the company since he was a young boy carrying out groceries and running the cash register. He graduated Sullivan University with a degree in xxxx in. Now is he our store manager and a master of the smoke pit",
        src: "/anthonyc.jpg"
    },
    {
        name: "Clayton Critchfield",
        title: "General Manager",
        summary: "Clayton is Mark's oldest son and also started out young in the family business as a bag boy. He graduated from the University of Kentucky with Bachelor's in Business Management and Marketing and also has a passion for technology. Right now he helps oversee accounting for the store and our wholesale plant amongst other responsibilities.",
        src: "/claytonc.jpg"
}, 
{
        name: "Brandon Critchfield",
        title: "Accounts Receivable Specialist",
        summary: "Brandon is Mark's second oldest son and also started as a cashier back in xxxx. Brandon graduated from Northern Kentucky University with a Bachelor's in xxxx and came back to the wholesale at the start of 2024. Brandon's outgoing nature and charisma help us serve our customers with passion and exuberance. ",
        src: "/brandonc.jpg"
},
{
        name: "Nicholas Critchfield",
        title: "Assistant Store Manager",
        summary: "Nicholas is Mark's 3rd son and started at the store in xxxx as a cashier. Nicholas' drive for success and ambition to continously improve helps us achieve our mission at our retail store to always serve excellence.",
        src: "/nickc.jpg"
}];

const renderedFamilyEmployees = familyEmployees.map((employee) => 
    <li key={employee.name} className="text-center mb-5" >
        <figure>
        <Image
         className="rounded-full m-auto shadow-2xl border-red-500 border-solid border-2"
         width = {250}
         height = {250}
         src= {employee.src}
         alt= {employee.name}
         />
         <h2 className="home-text text-xl">{employee.name}</h2>
         <h3 className="text-xl home-text">{employee.title}</h3>
         <figcaption className="w-1/4 text-center m-auto">{employee.summary}</figcaption>
    </figure>
    </li>
    
);


const otherManagers = [{
    name: "Ashley Faulkner",
    title: "Grocery Manager"
}, 
{
    name: "Mitch ...",
    title: "Deli Manager",
},
{
    name: "",
    title: ""
}]

const renderedOtherManagers = otherManagers.map((manager) => 
    <li key={manager.name}>
        <Image 
            width={200}
            height={200}
            src="/blah"
            alt={manager.name}
        />
        <h2>{manager.name}</h2>
        <h3>{manager.title}</h3>
    </li>
);

    return (
        <main>
            <h1 className="text-center home-text text-4xl py-8">Meat the Family!</h1>
            <ul>{renderedFamilyEmployees}</ul>
            <h2 className="home-text text-2xl mt-10 text-center">Managers:</h2>
            <ul>{renderedOtherManagers}</ul>
        </main>
    )
}