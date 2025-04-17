/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import java.sql.SQLException;

/**
 *
 * @author brandon
 */
public abstract class CrudDAO<T> {
    public abstract T insert(T entity) throws SQLException;
    
}
