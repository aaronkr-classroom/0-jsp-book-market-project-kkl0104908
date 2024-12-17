package mvc.model;

import java.sql.Connection; 
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import mvc.database.DBConnection;

public class BoardController extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    if (command.equals("/BoardListAction.do")) {
        requestBoardList(request);
        RequestDispatcher
        rd=request.getRequestDispatcher("./board/list.jsp");
        rd, forward(request, response);
    } else if (command.equals("/BoardWriteForm.do")) { //
        requestLoginName (request);
        RequestDispatcher rd = request.getRequestDispatcher("./board/ writeForm.jsp");
        rd.forward(request, response);
    } else if (command.equals("/BoardWriteAction.do")) { //
        requestBoardWrite(request);
        RequestDispatcher rd=request.getRequestDispatcher("/ BoardListAction,do");
        rd.forward(request, response);

    }
}

public void requestLoginName (HttpServletRequest request) {
    // 인증된 사용자명 가져오기

}

//새로운 글 등록하기
public void requestBoardWrite(HttpServletRequest request) {

    }
}


public class BoardDAO {

    private static BoardDAO instance;

    private BoardDAO() {
        // 선택된 글의 조회수 증가시키기
        public void updateHit(int num) {
        }
        // 선택된 글 상세 내용 가져오기
        public BoardDTO getBoardByNum(int num, int page) {
        }
        //member 테이블에서 인증된 id의 사용자명 가져오기
        public String getLoginNameById(String id){
        }
        public void insert(BoardDTO board){

        }
        public void deleteBoard(int num){
            
        }
    }
    
    public static BoardDAO getInstance() {
        if (instance == null)
            instance =new BoardDAO();   
            return instance;
    }
    //board 테이블의 레코드 개수
    public int getListCount() {
    }

    //board 테이블의 레코드 가져오기
    public ArrayList<BoardDTO> getBoardList(int page, int limit, String
    items, String text) {
    }

}
