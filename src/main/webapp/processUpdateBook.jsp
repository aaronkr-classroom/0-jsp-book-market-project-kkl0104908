<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="java.util.*" %>
<%@ page import="com.oreilly.servlet.*" %>
<%@ page import = "com.oreilly.servlet.multipart.*" %>
<%@ page import="java.sql.*" %>
<%@ include file="dbconn.jsp" %>
<%

	request.setCharacterEncoding("UTF-8");



	String filename = "";
	String real Folder = "C:\\Users\\user\\eclipse-workspace\\.metadata\\.
	plugins\\org.eclipse.wst.server.core\\tmp\\wtpwebapps\\BookMarket\\
	resources\\images";		
	String encType ="utf-8";
	int maxSize = 5 * 1024 * 1024;

	MultipartRequest multi = new MultipartRequest(request, real Folder,
	maxSize, encType, new DefaultFileRenamePolicy());

	String bookId=multi.getParameter("bookId");
	String name = multi.getParameter("name");
	String unitPrice = multi.getParameter("unitPrice");
	String author=multi.getParameter("author");
	String publisher = multi.getParameter("publisher");
	String releaseDate = multi.getParameter("releaseDate");
	String description = multi.getParameter("description");
	String category = multi.getParameter("category");
	String units InStock = multi.getParameter("units InStock");
	String condition = multi.getParameter("condition");

	Enumeration files = multi.getFileNames();
	String fname=(String) files.nextElement();
	String fileName = multi.getFilesystemName(fname);

	int price;
	
	if (unitPrice.isEmpty())
		price=0;
	else
		price = Integer.valueOf(unitPrice);

	long stock;

	if (unitsInStock.isEmpty())
		stock=0;
	else
		stock = Long.valueOf(units InStock);

	String sql = "SELECT FROM book WHERE b_id=?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, bookId);
	rs=pstmt.executeQuery();

	if (rs.next()) {
		if (fileName != null) {
			sql="UPDATE book SET b_name = ?, b_unitPrice = ?, b_author = ?,
			b_description=?, b_publisher =?, b_category=?, b_unitsInStock=?,
			b_releaseDate=?, b_condition = ?, b_fileName=? WHERE b_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, name);
			pstmt.setInt(2, price);
			pstmt.setString(3, author);
			pstmt.setString(4, description);
			pstmt.setString(5, publisher);
			pstmt.setString(6, category);
			pstmt.setLong(7, stock);
			pstmt.setString(8, releaseDate);
			pstmt.setString(9, condition);
			pstmt.setString(10, fileName);
			pstmt.setString(11, bookId);
			pstmt.executeUpdate();
		} else {
			sql = "UPDATE book SET b_name=?, b_unitPrice = ?, b_author=?, 
			b_description=?, b_publisher =?, b_category=?, b_units InStock =?,
			b_releaseDate=?, b_condition=? WHERE b_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, name);
			pstmt.setInt(2, price);
			pstmt.setString(3, author);
			pstmt.setString(4, description);
			pstmt.setString(5, publisher);
			pstmt.setString(6, category);
			pstmt.setLong(7, stock);
			pstmt.setString(8, releaseDate);
			pstmt.setString(9, condition);
			pstmt.setString(10, bookId);
			pstmt.executeUpdate();

		}
	}

	if (pstmt!=null)
		pstmt.close();
	if (conn!=null)
		conn.close();

	response.sendRedirect("editBook.jsp?edit=update");
%>