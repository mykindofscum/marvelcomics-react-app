import React from "react"

function Modal(props) {
	return (
		<div className="Modal">
			<header>{props.title}</header>
			<div>{props.children}</div>
			<footer>
				<button>Cancel</button> <button>OK</button>
			</footer>
		</div>
	)
}

export default Modal