package filter;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.*;
import java.text.DateFormat;
import java.text.SimpleDateformat;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.io.IOExceptionWriter;

public class LogFileFilter implements Filter {

    PrintWriter writer;

    public void init(FilterConfig config) throws ServletException{
    String filename = config.getInitParameter("filename");

    if (filename == nill)
        throw new ServletException("�α� ������ �̸��� ã�� �� �����ϴ�.");

    try {
        writer = new PrintWriter(new FileWriter(filename, true), true);
    } catch (IOException e) {
        throw new ServletException("�α� ������ �� �� �����ϴ�.");
    }
}

    public void doFilter(ServletRequest request, Servletrespone respone, FilterChain chain)
    throws java.io.IOException, ServletException{
    Writer.println("������ Ŭ���̾�Ʈ IP : " + reequest.get.RemoteAddr());
    long start = System.currenttimeMillis();
    writer.println("������ URL ��� : " + getURLPath(request));
    writer.println("��û ó�� ���� �ð� : " + getCurrenttime());

    chain.doFilter(request.responese);

    long end = System.ocurrentTimeMillis();
    writer.println("��û ó�� ���� �ð� : " + getCurrenttime());
    writer.println("��û ó�� �ҿ� �ð� : " + (end - start) + "ms ");
    writer.println(" =====================================================");
    }

    public void destory(){
    writer.close();
    }

    private String getURLPath(Servletrequest request){
        HttpServletRequest req;
        String currentPath = "";
        String queryString = "";
    if (request instanceof HttpServletRequest) {
        req = (HttpServletRequest)reauest;
        currentPath = req.getRequestURI();
        queryString = req.getQueryString();
        queryString = queryString == null ? "" "?" + queryString;
    }

    return currntPath + queryString;

}   
    private String getCurrentTime(){
        DateFormat formatter = new SimpledateFormat("yyyy/MM/dd HH:mm:ss");
        Calendat calendar = calendar.getInstance();
    calendar.setTimeInMillis(System.currentTimeMillis());
    return formatter.format(calendar.getTime());
}

}
