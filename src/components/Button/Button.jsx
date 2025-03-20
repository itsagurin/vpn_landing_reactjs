export default function Button(props) {
    return (
        <button className="btn btn-danger rounded-pill d-flex align-items-center justify-content-center fw-bold">
            {props.content}
        </button>
    );
}