/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.5384290Z
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
/// Valori tabellari di campi elenco
/// </summary>
public class DealerData_FieldValues
{
	/// <summary>
	/// Codice
	/// </summary>
	/// <remarks>
	/// <para>Codice assegnato dal dealer all'elemento.</para>
	/// </remarks>
	public string Code { get; set; }

	/// <summary>
	/// Campo di riferimento
	/// </summary>
	/// <remarks>
	/// <para>Campo al quale il valore di questo elemento si riferisce.</para>
	/// </remarks>
	public string? Field { get; set; }

	/// <summary>
	/// ID elemento
	/// </summary>
	/// <remarks>
	/// <para>Codice univoco dell'elemento.</para>
	/// </remarks>
	public string ItemId { get; set; }

	/// <summary>
	/// Descrizione
	/// </summary>
	/// <remarks>
	/// <para>Descrizione estesa di questo elemento.</para>
	/// </remarks>
	public string? Label { get; set; }
}
