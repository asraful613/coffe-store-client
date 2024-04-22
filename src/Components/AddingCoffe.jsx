const AddingCoffe = () => {
    const handleAddCoffe=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const test=form.test.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo =form.photo.value;
        const newCoffe={
            name,quantity,supplier,test,category,details,photo
        }
        console.log(newCoffe);
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add coffe</h2>
            <form onSubmit={handleAddCoffe}>
                {/* form name row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="coffe name" type="text" name="name" id="" />
                        </label>
                    </div>
                <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="available quantity" type="text" name="quantity" id="" />
                        </label>
                    </div>
                </div>
                {/* form supplier  row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="supplier" type="text" name="supplier" id="" />
                        </label>
                    </div>
                <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Test" type="text" name="test" id="" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Category" type="text" name="category" id="" />
                        </label>
                    </div>
                <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Details" type="text" name="details" id="" />
                        </label>
                    </div>
                </div>
                {/* form photo url */}
                <div className="">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Photo Url" type="text" name="photo" id="" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block" type="submit" value="ADD COFFE" />
            </form>
        </div>
    );
};

export default AddingCoffe;