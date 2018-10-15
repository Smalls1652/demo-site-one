import React, { Component } from 'react';
    

    class Testtable extends Component {
        render() {
          return (
            <div>
            <h2 id="test-table">Test Table</h2>
<table className="table table-sm table-hover table-striped">
<thead>
<tr>
<th>Column 1</th>
<th>Column 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>Item 1</td>
<td>Hello</td>
</tr>
<tr>
<td>Item 2</td>
<td>World!</td>
</tr>
<tr>
<td>Item 3</td>
<td>Tables</td>
</tr>
<tr>
<td>Item 4</td>
<td>Are Cool!</td>
</tr>
</tbody>
</table>
<p class="text-muted">* Here's a sample of text that I muted.</p>

            </div>
            )
        }};
        
        export default Testtable;
