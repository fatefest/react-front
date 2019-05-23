import React from "react";

class ProductCategoryRow extends React.Component{
    render() {
        return (
            <tr><th colSpan="2">{this.props.category}</th></tr>
        );
    }
}

class ProductRow extends React.Component{
    render(){
        let name = this.props.product.stocked?
            this.props.product.name
            :<span stype={{color:'red'}}>{this.props.product.name}</span>
        ;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
class ProductTable extends React.Component{
    render(){
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) =>{
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
class SearchBar extends React.Component{
    handleFilterTextInputChange=(e)=> {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange=(e)=> {
        this.props.onInStockInput(e.target.checked);
    }
    render() {
        return (
            <form>
                <input placeholder='请输入...' type='text'
                       value={this.props.filterText}
                       onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input type='checkbox'
                       value={this.props.inStockOnly}
                       onChange={this.handleInStockInputChange}
                    />
                    Only show product sorted
                </p>
            </form>
        )
    }
}

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            inStockOnly:false
        };
    }

    handleFilterTextInput=(filterText)=> {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockInput=(inStockOnly)=> {
        this.setState({
            inStockOnly: inStockOnly
        })
    }
    render(){
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;