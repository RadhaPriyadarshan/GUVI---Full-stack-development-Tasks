
import Card from './components/card'
function App() {
  const data = [
    {
      tag: "Free",
      amount: "$0/month",
      features:[
        {property :"Single User", isAvailable: true },
        {property :"50GB Storage", isAvailable: true },
        {property :"Unlimited Public Projects", isAvailable: true },
        {property :"Community Access", isAvailable: true },
        {property :"Unlimited Private Projects", isAvailable: false },
        {property :"Dedicated Phone Support", isAvailable: false },
        {property :"Free Subdomain", isAvailable: false },
        {property :"Monthly Status Reports", isAvailable: false },
      ]
    },
    {
      tag: "Plus",
      amount: "$9/month",
      features:[
        {property :"Single User", isAvailable: true },
        {property :"50GB Storage", isAvailable: true },
        {property :"Unlimited Public Projects", isAvailable: true },
        {property :"Community Access", isAvailable: true },
        {property :"Unlimited Private Projects", isAvailable: true },
        {property :"Dedicated Phone Support", isAvailable: true },
        {property :"Free Subdomain", isAvailable: true },
        {property :"Monthly Status Reports", isAvailable: false },
      ]
    },
    {
      tag: "Pro",
      amount: "$49/month",
      features:[
        {property :"Single User", isAvailable: true },
        {property :"50GB Storage", isAvailable: true },
        {property :"Unlimited Public Projects", isAvailable: true },
        {property :"Community Access", isAvailable: true },
        {property :"Unlimited Private Projects", isAvailable: true },
        {property :"Dedicated Phone Support", isAvailable: true },
        {property :"Free Subdomain", isAvailable: true },
        {property :"Monthly Status Reports", isAvailable: true },
      ]
    },
  ];

  return (
    <>
    <div className='container'>
    {data.map((cardData,index)=>(
    <Card key={index} tag={cardData.tag} amount={cardData.amount} features={cardData.features} ></Card>
    ))} 
    
    </div>
    </>
  )
}

export default App
