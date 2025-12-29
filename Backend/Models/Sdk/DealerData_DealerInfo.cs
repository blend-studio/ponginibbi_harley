/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.5383826Z
 * Questo file è stato generato automaticamente.
 */

#nullable enable

#pragma warning disable IDE0079
#pragma warning disable CS8618
#pragma warning disable IDE0005

using System;
using System.Collections.Generic;

namespace PublisherModels;

/// <summary>
/// Informazioni sul dealer
/// </summary>
/// <remarks>
/// <para>A partire da: 2020-09-24</para>
/// </remarks>
public class DealerData_DealerInfo
{
	/// <summary>
	/// Via dell'indirizzo principale del dealer
	/// </summary>
	public string? Address { get; set; }

	/// <summary>
	/// Ragione sociale del dealer
	/// </summary>
	public string? DealerName { get; set; }

	/// <summary>
	/// Indirizzo email #1
	/// </summary>
	public string? Email1 { get; set; }

	/// <summary>
	/// Descrizione dell'indirizzo email #1
	/// </summary>
	public string? Email1Description { get; set; }

	/// <summary>
	/// Indirizzo email #2
	/// </summary>
	public string? Email2 { get; set; }

	/// <summary>
	/// Descrizione dell'indirizzo email #2
	/// </summary>
	public string? Email2Description { get; set; }

	/// <summary>
	/// Codice fiscale
	/// </summary>
	public string? FiscalCode { get; set; }

	/// <summary>
	/// ID dell'ultima VAR di Infinity installata
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-03-07</para>
	/// </remarks>
	/// <seealso cref="InfinityReleaseDate"/>
	public string InfinityLastVar { get; set; }

	/// <summary>
	/// Data dell'ultimo aggiornamento di Infinity
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-03-07</para>
	/// </remarks>
	/// <seealso cref="InfinityLastVar"/>
	public DateTime InfinityReleaseDate { get; set; }

	/// <summary>
	/// Versione di Infinity
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-03-07</para>
	/// </remarks>
	/// <seealso cref="InfinityLastVar"/>
	public string InfinityReleaseVersion { get; set; }

	/// <summary>
	/// Note #1
	/// </summary>
	public string? Notes1 { get; set; }

	/// <summary>
	/// Note #2
	/// </summary>
	public string? Notes2 { get; set; }

	/// <summary>
	/// Note #3
	/// </summary>
	public string? Notes3 { get; set; }

	/// <summary>
	/// Note #4
	/// </summary>
	public string? Notes4 { get; set; }

	/// <summary>
	/// Numero di telefono #1
	/// </summary>
	public string? Phone1 { get; set; }

	/// <summary>
	/// Numero di telefono #2
	/// </summary>
	public string? Phone2 { get; set; }

	/// <summary>
	/// Numero di telefono #3
	/// </summary>
	public string? Phone3 { get; set; }

	/// <summary>
	/// CAP dell'indirizzo principale del dealer
	/// </summary>
	public string? PostalCode { get; set; }

	/// <summary>
	/// Codice della provincia dell'indirizzo principale del dealer
	/// </summary>
	public string? ProvinceCode { get; set; }

	/// <summary>
	/// Partita IVA del dealer, spesso usata come ID univoco
	/// </summary>
	public string? VatCode { get; set; }

	/// <summary>
	/// Sito web
	/// </summary>
	public string? WebSite { get; set; }
}
