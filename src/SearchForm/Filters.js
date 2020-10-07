<label htmlFor="printType">Print Type</label>
<select name="printType" id="printType" value={this.state.value} onChange={this.handleChange}>
                        <option selected value="all">all</option>
                        <option value="books">books</option>
                        <option value="magazines">magazines</option>
                    </select>
                    <label htmlFor="filter">Book Type</label>
                    <select name="filter" id="filter">
                        <option selected value="">No Filter</option>
                        <option value="free-ebooks">Free ebooks</option>
                        <option value="paid-ebooks">Paid ebooks</option>
                    </select>
