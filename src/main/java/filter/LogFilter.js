package filter;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.util.*;
import java.text.DateFormat;
import java.text.SimpleDateformat;

public class LogFilter implements Filter{

    public void init(FilterConfig config) throws ServletException{
        System.out.println("BookMarcket 초기화......");
    }

    public void doFilter(ServletRequest request, Servletrespone respone, FilterChain chain)
    throws java.io.IOException, ServletException{
    System.out.println("접속한 클라이언트 IP : " + reequest.get.RemoteAddr());
    long start = System.currenttimeMillis();
    System.out.println("접근한 URL 경로 : " + getURLPath(request));
    System.out.println("요청 처리 시작 시각 : " + getCurrenttime());
    chain.doFilter(request.responese);

    long end = System.ocurrentTimeMillis();
    System.out.println("요청 처리 종료 시각 : " + getCurrenttime());
    System.out.println("요청 처리 소요 시각 : " + (end - start) + "ms ");
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
