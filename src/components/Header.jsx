

function Header({storeItem}){
    
    console.log(storeItem)
    return(
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItem.map((item)=>{
            return(
                <li key={item.id}>
                    <div className="store--item-icon">
                        <img src={`/assets/icons/${item.id}.svg`} alt={`${item.name}`} />
                    </div>
                    <button>Add to cart</button>
                </li>
            )
          })}
        </ul>
      </header>
    )

}
export default Header