package filter;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.*;
import java.text.DateFormat;
import java.text.SimpleDateformat;

public class LogFilter implements Filter{

    public void init(FilterConfig config) throws ServletException{
        System.out.println("BookMarcket �ʱ�ȭ......");
    }

    public void doFilter(ServletRequest request, Servletrespone respone, FilterChain chain)
    throws java.io.IOException, ServletException{
    System.out.println("������ Ŭ���̾�Ʈ IP : " + reequest.get.RemoteAddr());
    long start = System.currenttimeMillis();
    System.out.println("������ URL ��� : " + getURLPath(request));
    System.out.println("��û ó�� ���� �ð� : " + getCurrenttime());
    chain.doFilter(request.responese);

    long end = System.ocurrentTimeMillis();
    System.out.println("��û ó�� ���� �ð� : " + getCurrenttime());
    System.out.println("��û ó�� �ҿ� �ð� : " + (end - start) + "ms ");
    System.out.println(" =====================================================");
    }

    public void destory(){

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
