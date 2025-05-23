/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.appsalonbelleza.controllers.reportes;

import com.mycompany.appsalonbelleza.models.AnunciosDTO;
import com.mycompany.appsalonbelleza.reportes.ReporteMarketing;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

/**
 *
 * @author brandon
 */
@WebServlet(urlPatterns = {"/ReporteMarketingServlet"})
public class ReporteMarketingServlet extends HttpServlet {
    
    ReporteMarketing reporteMarketing = new ReporteMarketing();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ReporteMarketingServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ReporteMarketingServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String tipoReporte = request.getParameter("tipoReporte");
        try {
            System.out.println("Generando reporte");
            List<AnunciosDTO> anuncios; 
            if (tipoReporte.equals("anunciosMasMostrados")) {
                anuncios = reporteMarketing.anunciosMasMostradosPDF();
            }else if (tipoReporte.equals("anunciosMenosMostrados")) {
                anuncios = reporteMarketing.anunciosMenosMostradosPDF();
            } else {
                anuncios = reporteMarketing.anunciosMasMostradosPDF();
            }
            JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(anuncios);

            InputStream jasper = getClass().getResourceAsStream("/reports/ReportesMarketing.jasper");
//            InputStream logo = getClass().getResourceAsStream("/reports/logo.png");

            HashMap<String, Object> parameters = new HashMap<>();
            parameters.put("dataSource", dataSource);
//            parameters.put("LOGO", logo);

            JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, parameters, dataSource);

            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "attachment; filename=anunciosmasmostrados.pdf");

            JasperExportManager.exportReportToPdfStream(jasperPrint, response.getOutputStream());

        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "No se pudo generar el reporte.");
            System.out.println("No se pudo generar el reporte, error: " + e);
        }
//        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
