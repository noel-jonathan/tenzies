export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <div 
        className="die center" 
        onClick={props.holdDie} 
        style={styles} 
        >{props.value}</div>
    )
}