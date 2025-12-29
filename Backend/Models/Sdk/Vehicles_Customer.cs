/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6406642Z
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
/// Dati relativi all'intestatario del contratto associato al veicolo
/// </summary>
/// <remarks>
/// <para>A partire da: 2021-07-14</para>
/// </remarks>
public class Vehicles_Customer
{
	/// <summary>
	/// Indirizzo della residenza o della sede legale
	/// </summary>
	public string? Address { get; set; }

	/// <summary>
	/// Città di nascita
	/// </summary>
	public string? BirthCity { get; set; }

	/// <summary>
	/// Data di nascita
	/// </summary>
	public DateTime? BirthDate { get; set; }

	/// <summary>
	/// Codice provincia del comune di nascita
	/// </summary>
	public string? BirthProvinceCode { get; set; }

	/// <summary>
	/// Città della residenza o della sede legale
	/// </summary>
	public string? City { get; set; }

	/// <summary>
	/// ID univoco del cliente all'interno del DMS
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-10-05</para>
	/// </remarks>
	public string? Code { get; set; }

	/// <summary>
	/// CAP della residenza o della sede legale
	/// </summary>
	public string? CountryIso { get; set; }

	/// <summary>
	/// Indirizzo email #1
	/// </summary>
	public string? Email1 { get; set; }

	/// <summary>
	/// Indirizzo email #2
	/// </summary>
	public string? Email2 { get; set; }

	/// <summary>
	/// Cognome della persona fisica
	/// </summary>
	/// <seealso cref="NaturalPerson"/>
	public string? FamilyName { get; set; }

	/// <summary>
	/// Sesso della persona fisica
	/// </summary>
	public string? Gender { get; set; }

	/// <summary>
	/// Nome della persona fisica
	/// </summary>
	/// <seealso cref="NaturalPerson"/>
	public string? GivenName { get; set; }

	/// <summary>
	/// ID univoco del cliente all'interno del gruppo di aziende
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-11-19</para>
	/// </remarks>
	public string? GroupCode { get; set; }

	/// <summary>
	/// Cognome del rappresentante legale
	/// </summary>
	/// <seealso cref="LegalRepresentativeGivenName"/>
	public string? LegalRepresentativeFamilyName { get; set; }

	/// <summary>
	/// Nome del rappresentante legale
	/// </summary>
	/// <seealso cref="LegalRepresentativeFamilyName"/>
	public string? LegalRepresentativeGivenName { get; set; }

	/// <summary>
	/// Persona fisica
	/// </summary>
	/// <remarks>
	/// <para>Indica se l'intestatario del contratto è una persona fisica o giuridica</para>
	/// </remarks>
	public bool? NaturalPerson { get; set; }

	/// <summary>
	/// Tipo di persona
	/// </summary>
	/// <remarks>
	/// <para>Tipo di persona fisica o giuridica</para>
	/// <para>Valori noti: Legal, Natural, Institution, Employee, Dealer, Individual</para>
	/// <para>A partire da: 2022-02-10</para>
	/// </remarks>
	public string? PersonType { get; set; }

	/// <summary>
	/// Numero di telefono #1
	/// </summary>
	/// <seealso cref="NaturalPerson"/>
	public string? Phone1 { get; set; }

	/// <summary>
	/// Numero di telefono #2
	/// </summary>
	public string? Phone2 { get; set; }

	/// <summary>
	/// CAP della residenza o della sede legale
	/// </summary>
	public string? PostalCode { get; set; }

	/// <summary>
	/// Email preferita per le comunicazioni
	/// </summary>
	public string? PreferredEmail { get; set; }

	/// <summary>
	/// Numero di telefono preferito per le comunicazioni
	/// </summary>
	public string? PreferredPhone { get; set; }

	/// <summary>
	/// Codice provincia della residenza o della sede legale
	/// </summary>
	public string? ProvinceCode { get; set; }

	/// <summary>
	/// Codice fiscale della persona fisica
	/// </summary>
	public string? TaxCode { get; set; }

	/// <summary>
	/// Ragione sociale, se persona giuridica
	/// </summary>
	/// <seealso cref="NaturalPerson"/>
	public string? TradeName { get; set; }

	/// <summary>
	/// Partita IVA della persona giuridica
	/// </summary>
	public string? VatNumber { get; set; }

	/// <summary>
	/// Sito web
	/// </summary>
	public string? Website { get; set; }
}
